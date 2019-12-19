import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:grinch/api.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'bravo.dart';
import 'code.dart';
import 'package:circular_countdown/circular_countdown.dart';
import 'dart:async';

ApiService api = ApiService();

class Task extends StatefulWidget {
  final int id;
  final int state;
  final String asset;
  final String title;
  final String text;
  const Task({Key key, this.id, this.state, this.asset, this.title, this.text})
      : super(key: key);

  @override
  _TaskState createState() => _TaskState();
}

class _TaskState extends State<Task> {
  int seconds = 5;
  int current = 1;
  var timer;

  @override
  void initState() {
    super.initState();
    fetchData();
    startTimer();
  }

  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }

  void fetchData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    var typeId = prefs.getString('typeId');
    var data = await api.statesOfType(typeId);
    var task = json.decode(data.body)['tasks'][widget.id - 1];

    setState(() {
      seconds = task['duration'];
      current = task['status'].toInt();
    });
  }

  void startTimer() {
    timer = Timer.periodic(new Duration(seconds: 1), (timer) {
      if (current < seconds) {
        setState(() {
          current++;
        });
      } else {
        setState(() {
          timer.cancel();
          print('task.dart - state: ' + widget.state.toString());
          if (widget.state < 3) {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (context) => Bravo(state: widget.state + 1),
              ),
            );
          } else {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (context) => Code(),
              ),
            );
          }
        });
      }
    });
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
            image: AssetImage(widget.asset),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Container(
                    height: MediaQuery.of(context).size.height * 0.3,
                  ),
                  Text(
                    widget.title,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'ProximaBold',
                    ),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width * 0.6,
                    padding: EdgeInsets.only(top: 10),
                    child: Text(
                      widget.text,
                      textAlign: TextAlign.center,
                      softWrap: true,
                      style: TextStyle(
                        color: Colors.black,
                        fontSize: 16,
                        fontFamily: 'ProximaRegular',
                      ),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.only(top: 30),
                    child: CircularCountdown(
                      diameter: 150,
                      countdownTotal: seconds,
                      countdownRemaining: seconds - current,
                      countdownTotalColor: Color.fromRGBO(61, 209, 61, 1),
                      countdownCurrentColor: Color.fromRGBO(61, 209, 61, 1),
                      countdownRemainingColor: Colors.black,
                      strokeWidth: 3,
                      textSpan: TextSpan(
                        text: (seconds >= 1000)
                            ? ''
                            : (seconds - current).toString(),
                        style: TextStyle(
                          color: Color.fromRGBO(61, 209, 61, 1),
                          fontSize: 50,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
