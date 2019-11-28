import 'package:flutter/material.dart';
import 'dart:async';
import 'tasks.dart';

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

            // "assets/images/" + widget.asset + "_bg.png"
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
            Padding(
              padding: EdgeInsets.all(10),
              child: Text(
                "SİZ BU TAPŞIRIĞIN\nÖHDƏSİNDƏN GƏLDİNİZ!",
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'ProximaBold',
                ),
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width * 0.8,
              height: MediaQuery.of(context).size.height * 0.075,
              child: RaisedButton(
                color: Color.fromRGBO(72, 229, 72, 1),
                textColor: Colors.white,
                elevation: 20,
                focusColor: Color.fromRGBO(72, 229, 72, 1),
                highlightColor: Color.fromRGBO(72, 229, 72, 1),
                splashColor: Color.fromRGBO(72, 229, 72, 1),
                padding: EdgeInsets.symmetric(
                  vertical: 14,
                  horizontal: 20,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(6),
                  side: BorderSide(
                    color: Color.fromRGBO(72, 229, 72, 1),
                  ),
                ),
                child: Text(
                  'Növbəti',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    fontFamily: 'ProximaBold',
                  ),
                ),
                onPressed: () => {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => Tasks(open: widget.state),
                    ),
                  ),
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
