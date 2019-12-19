import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:grinch/api.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'widgets.dart';
import 'tasks.dart';
import 'package:shared_preferences/shared_preferences.dart';

ApiService api = ApiService();

class Registration extends StatefulWidget {
  Registration({Key key}) : super(key: key);

  @override
  _RegistrationState createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  final _formKey = GlobalKey<FormState>();
  TextEditingController name = TextEditingController();
  TextEditingController surname = TextEditingController();
  TextEditingController phone = TextEditingController();
  TextEditingController code = TextEditingController();

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
              child: Form(
                key: _formKey,
                child: Column(
                  children: <Widget>[
                    TextField(
                      textInputAction: TextInputAction.next,
                      keyboardType: TextInputType.text,
                      enabled: false,
                    ),
                    TextField(
                      textInputAction: TextInputAction.next,
                      keyboardType: TextInputType.text,
                      controller: name,
                      decoration: InputDecoration(
                        hintText: 'Adınız',
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: EdgeInsets.symmetric(
                          vertical: 16,
                          horizontal: 20,
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 10),
                    ),
                    TextField(
                      textInputAction: TextInputAction.next,
                      keyboardType: TextInputType.text,
                      controller: surname,
                      decoration: InputDecoration(
                        hintText: 'Soyadınız',
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: EdgeInsets.symmetric(
                          vertical: 16,
                          horizontal: 20,
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 10),
                    ),
                    TextField(
                      textInputAction: TextInputAction.next,
                      keyboardType: TextInputType.text,
                      controller: phone,
                      decoration: InputDecoration(
                        hintText: 'Telefon',
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: EdgeInsets.symmetric(
                          vertical: 16,
                          horizontal: 20,
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 10),
                    ),
                    TextField(
                      textInputAction: TextInputAction.next,
                      keyboardType: TextInputType.text,
                      controller: code,
                      decoration: InputDecoration(
                        hintText: 'Kod',
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: EdgeInsets.symmetric(
                          vertical: 16,
                          horizontal: 20,
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(vertical: 10),
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
                          submitData(context),
                        },
                      ),
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

  void submitData(BuildContext context) async {
    var res = await api.login(
      name.text,
      surname.text,
      phone.text,
      code.text,
    );

    if (json.decode(res.body)['status'] == 'error') {
      Alert(
        context: context,
        type: AlertType.error,
        title: "Xəta!",
        desc: "Yazılmış məlumatların doğruluğunu yoxlayın",
        buttons: [
          DialogButton(
            child: Text(
              "Oldu",
              style: TextStyle(color: Colors.white, fontSize: 20),
            ),
            onPressed: () => Navigator.pop(context),
            width: 120,
          )
        ],
      ).show();
    } else if (json.decode(res.body)['status'] == 'success') {
      SharedPreferences prefs = await SharedPreferences.getInstance();
      await prefs.setString('name', name.text);
      await prefs.setString('surname', surname.text);
      await prefs.setString('phone', phone.text);
      await prefs.setString('code', code.text);
      await prefs.setString(
        'typeId',
        json.decode(res.body)['user']['type_id'].toString(),
      );

      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => Tasks(open: 1),
        ),
      );
    }
  }
}
