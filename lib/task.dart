import 'package:flutter/material.dart';
import 'widgets.dart';
import 'package:circular_countdown/circular_countdown.dart';
import 'dart:async';

class Task extends StatefulWidget {
  final int state;
  final String asset;
  const Task({Key key, this.state, this.asset}) : super(key: key);

  @override
  _TaskState createState() => _TaskState();
}

class _TaskState extends State<Task> {
  int seconds = 45;
  int current = 1;

  @override
  void initState() {
    super.initState();
    startTimer();
  }

  void startTimer() {
    Timer.periodic(new Duration(seconds: 1), (timer) {
      if (current < seconds) {
        setState(() {
          current++;
        });
      } else {
        setState(() {
          current = 1;
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
            image: AssetImage("assets/images/tree_bg.png"),

            // "assets/images/" + widget.asset + "_bg.png"
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
                        text: (seconds - current).toString(),
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
