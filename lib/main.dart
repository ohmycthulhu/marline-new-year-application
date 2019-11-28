import 'dart:async';

import 'package:flutter/material.dart';
import 'registration.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'New Year with Grinch',
      theme: ThemeData(
        primarySwatch: Colors.green,
        cursorColor: Color.fromRGBO(61, 209, 61, 1),
        fontFamily: 'ProximaRegular',
      ),
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  @override
  void initState() {}

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage("assets/images/bg1.png"),
          fit: BoxFit.cover,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            width: MediaQuery.of(context).size.width * 0.4,
            height: MediaQuery.of(context).size.width * 0.1,
            margin: EdgeInsets.only(
              top: MediaQuery.of(context).size.height * 0.7,
            ),
            child: RaisedButton(
              color: Color.fromRGBO(61, 209, 61, 1),
              textColor: Colors.white,
              elevation: 50,
              shape: RoundedRectangleBorder(
                borderRadius: new BorderRadius.circular(18.0),
                side: BorderSide(
                  color: Color.fromRGBO(61, 209, 61, 1),
                ),
              ),
              child: Text(
                'BAŞLA!',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              onPressed: () => {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => Registration()),
                ),
              },
            ),
          ),
        ],
      ),
    );
  }
}
