import 'package:flutter/material.dart';
import 'widgets.dart';
import 'tasks.dart';

class Registration extends StatefulWidget {
  Registration({Key key}) : super(key: key);

  @override
  _RegistrationState createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/rgbg.png"),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Container(
              width: MediaQuery.of(context).size.width * 0.8,
              child: Column(
                children: <Widget>[
                  Widgets.field('Ad, Soyad', context),
                  Widgets.field('Kod', context),
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
                            builder: (context) => Tasks(open: 1),
                          ),
                        ),
                      },
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
