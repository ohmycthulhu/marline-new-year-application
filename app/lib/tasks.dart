import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:grinch/api.dart';
import 'package:grinch/bravo.dart';
import 'package:grinch/code.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'widgets.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

ApiService api = ApiService();

class Tasks extends StatefulWidget {
  final int open;
  const Tasks({Key key, this.open}) : super(key: key);

  @override
  _TasksState createState() => _TasksState();
}

class _TasksState extends State<Tasks> {
  IO.Socket socket;
  var tasks = List();

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  void fetchData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    var typeId = prefs.getString('typeId');
    var data = await api.statesOfType(typeId);
    var x = json.decode(data.body)['tasks'];
    if (x[x.length - 1]['status'] != "end") {
      setState(() {
        tasks.clear();
        tasks.addAll(json.decode(data.body)['tasks']);
        initSocket(typeId);
      });
    } else {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => Code()),
      );
    }
  }

  void initSocket(String typeId) {
    socket = IO.io('http://ny.marline.agency');
    socket.on('connect', (_) {
      print('connect');
    });

    socket.clearListeners();

    for (var i = 0; i < tasks.length; i++) {
      var taskId = tasks[i]['id'];
      socket.on('status:' + typeId + ':' + taskId.toString(),
          (data) => handle(data, taskId));
    }
  }

  void handle(String action, int taskId) async {
    print(taskId);
    print(action);

    if (action == "start") {
      setState(() {
        tasks[taskId - 1]['status'] = 0;
        tasks[taskId - 1]['finished'] = false;
        tasks[taskId - 1]['disabled'] = false;
      });
    } else if (action == "end") {
      setState(() {
        tasks[taskId - 1]['status'] = "end";
        tasks[taskId - 1]['finished'] = true;
        tasks[taskId - 1]['disabled'] = false;
      });

      var page = taskId == 3 ? Code() : Bravo(state: 2);

      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => page),
      );
    } else if (action == "clear") {
      setState(() {
        tasks[taskId - 1]['status'] = null;
        tasks[taskId - 1]['finished'] = false;
        tasks[taskId - 1]['disabled'] = true;
      });

      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => Tasks(
            open: 1,
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/greenbg.png"),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              width: MediaQuery.of(context).size.width * 0.6,
              height: MediaQuery.of(context).size.width * 0.6,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage("assets/images/grinch.png"),
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height -
                  (MediaQuery.of(context).size.width * 0.6),
              padding: EdgeInsets.only(
                left: MediaQuery.of(context).size.width * 0.05,
                right: MediaQuery.of(context).size.width * 0.05,
                bottom: MediaQuery.of(context).size.width * 0.05,
              ),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: new BorderRadius.circular(12),
                  color: Color.fromRGBO(55, 174, 12, 1),
                ),
                child: ListView(
                  children: <Widget>[
                    Text(
                      "TAPŞIRIQLAR",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.normal,
                        color: Colors.white,
                      ),
                    ),
                    Container(
                      height: 10,
                    ),
                    ListView.builder(
                      shrinkWrap: true,
                      physics: ClampingScrollPhysics(),
                      itemCount: tasks.length,
                      itemBuilder: (BuildContext ctxt, int index) {
                        return Widgets.task(
                          tasks[index]['id'],
                          tasks[index]['name'],
                          tasks[index]['text'],
                          tasks[index]['image_path'],
                          tasks[index]['bg_path'],
                          context,
                          duration: int.tryParse(
                            tasks[index]['duration'].toString(),
                          ),
                          secondsLeft: (tasks[index]['status'] is String ||
                                  tasks[index]['status'] == null)
                              ? 0
                              : int.tryParse(
                                    tasks[index]['duration'].toString(),
                                  ) -
                                  tasks[index]['status'],
                          state: tasks[index]['id'],
                          finished: tasks[index]['status'] == "end",
                          disabled: tasks[index]['status'] == null,
                        );
                      },
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
