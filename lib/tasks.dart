import 'package:flutter/material.dart';
import 'widgets.dart';

class Tasks extends StatefulWidget {
  final int open;
  const Tasks({Key key, this.open}) : super(key: key);

  @override
  _TasksState createState() => _TasksState();
}

class _TasksState extends State<Tasks> {
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
                    Widgets.task(
                      'Yenİ İl ağacını\nbəzəmək',
                      'tree',
                      context,
                      state: widget.open,
                      finished: widget.open > 1,
                      disabled: widget.open < 1,
                    ),
                    Widgets.task(
                      'Şəkİl parçalarını\ntamamlayın',
                      'puzzle',
                      context,
                      state: widget.open,
                      finished: widget.open > 2,
                      disabled: widget.open < 2,
                    ),
                    Widgets.task(
                      'Yenİ İl ağacını\nbəzəmək',
                      'tree',
                      context,
                      state: widget.open,
                      finished: widget.open > 3,
                      disabled: widget.open < 3,
                    ),
                    Widgets.task(
                      'Şəkİl parçalarını\ntamamlayın',
                      'puzzle',
                      context,
                      state: widget.open,
                      finished: widget.open > 4,
                      disabled: widget.open < 4,
                    ),
                    Widgets.task(
                      'Yenİ İl ağacını\nbəzəmək',
                      'tree',
                      context,
                      state: widget.open,
                      finished: widget.open > 3,
                      disabled: widget.open < 3,
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
