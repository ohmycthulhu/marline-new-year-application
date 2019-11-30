import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'task.dart';

class Widgets {
  static Widget task(String title, String asset, BuildContext context,
      {finished: false, bool disabled: false, int state: 1}) {
    return GestureDetector(
      onTap: () {
        if (!disabled && !finished) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => (Task(asset: asset, state: state)),
            ),
          );
        }
      },
      child: Opacity(
        opacity: disabled ? 0.6 : 1,
        child: Stack(
          children: <Widget>[
            Container(
              width: MediaQuery.of(context).size.width * 0.9,
              height: MediaQuery.of(context).size.width * 0.3,
              margin: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              padding: EdgeInsets.symmetric(horizontal: 40),
              decoration: BoxDecoration(
                borderRadius: new BorderRadius.circular(12),
                color: Color.fromRGBO(100, 208, 51, 1),
                image: (finished)
                    ? null
                    : DecorationImage(
                        image: AssetImage("assets/images/" + asset + ".png"),
                        fit: BoxFit.cover,
                      ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      title.toUpperCase(),
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        color: (finished) ? Colors.white : Colors.black,
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        fontFamily: 'ProximaBold',
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(top: 5),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: SvgPicture.asset(finished
                          ? "assets/images/stars_yellow.svg"
                          : "assets/images/stars_grey.svg"),
                    ),
                  ),
                ],
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                (finished)
                    ? Padding(
                        padding: EdgeInsets.only(
                            right: MediaQuery.of(context).size.width * 0.1,
                            top: MediaQuery.of(context).size.width * 0.1 * 0.9),
                        child: SvgPicture.asset("assets/images/checked.svg"),
                      )
                    : Container(),
              ],
            ),
          ],
        ),
      ),
    );
  }

  static Widget field(String placeholder, BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          height: MediaQuery.of(context).size.height * 0.1,
          child: TextField(
            textInputAction: TextInputAction.next,
            keyboardType: TextInputType.text,
            decoration: InputDecoration(
              filled: true,
              fillColor: Colors.white,
              hintText: placeholder,
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
            style: TextStyle(
              fontSize: 16,
            ),
          ),
        ),
      ],
    );
  }

  static Widget pinfield(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          height: MediaQuery.of(context).size.height * 0.1,
          width: MediaQuery.of(context).size.width * 0.6,
          child: TextField(
            obscureText: true,
            textInputAction: TextInputAction.done,
            keyboardType: TextInputType.number,
            textAlign: TextAlign.center,
            decoration: InputDecoration(
              filled: true,
              fillColor: Colors.green,
              focusColor: Colors.white,
              hoverColor: Colors.white,
              contentPadding: EdgeInsets.symmetric(
                vertical: 8,
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
            style: TextStyle(
              fontSize: 28,
              color: Colors.white,
              letterSpacing: 10,
            ),
          ),
        ),
      ],
    );
  }
}
