import 'package:flutter/material.dart';
import 'dart:async';
import 'tasks.dart';
import 'widgets.dart';

class Code extends StatefulWidget {
  final int state;
  final String asset;
  const Code({Key key, this.state, this.asset}) : super(key: key);

  @override
  _CodeState createState() => _CodeState();
}

class _CodeState extends State<Code> {
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
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Stack(
              children: <Widget>[
                Container(
                  width: MediaQuery.of(context).size.width,
                  height: MediaQuery.of(context).size.height * 0.6,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage("assets/images/clap.gif"),
                      fit: BoxFit.fitHeight,
                    ),
                  ),
                ),
              ],
            ),
            Stack(
              alignment: Alignment.center,
              children: <Widget>[
                Container(
                  width: MediaQuery.of(context).size.width * 0.9,
                  height: MediaQuery.of(context).size.height * 0.35,
                  decoration: BoxDecoration(
                    borderRadius: new BorderRadius.circular(12),
                    color: Color.fromRGBO(55, 174, 12, 1),
                  ),
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding: EdgeInsets.only(top: 30),
                        child: Text(
                          "ŞİFRƏNİ DAXİL EDİN",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            fontFamily: 'ProximaBold',
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.only(top: 10, bottom: 15),
                        child: Text(
                          "It is a long established fact that a\nreader will be distracted by the\nreadable content .",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                            fontFamily: 'ProximaRegular',
                          ),
                        ),
                      ),
                      Widgets.pinfield(context),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
