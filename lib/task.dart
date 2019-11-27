import 'package:flutter/material.dart';
import 'widgets.dart';

class Task extends StatefulWidget {
  final int state;
  final String asset;
  const Task({Key key, this.state, this.asset}) : super(key: key);

  @override
  _TaskState createState() => _TaskState();
}

class _TaskState extends State<Task> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/tree_bg.png"),

            // "assets/images/" + widget.asset + "_bg.png"
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              "Yeni il şam ağacını\nbəzəyin",
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
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                textAlign: TextAlign.center,
                softWrap: true,
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 16,
                  fontFamily: 'ProximaRegular',
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
