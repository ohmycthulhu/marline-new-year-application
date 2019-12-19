import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'dart:async';

class ApiService {
  String _api = 'http://ny.marline.agency/';

  Future<Response> login(
    String name,
    String surname,
    String phone,
    String code,
  ) async {
    final response = await http.post(
      _api + 'users',
      body: {
        'name': name,
        'phone': phone,
        'last_name': surname,
        'code': code,
      },
    );

    return response;
  }

  Future<Response> statesOfType(String typeId) async {
    final response = await http.get(
      _api + 'states/' + typeId,
    );

    return response;
  }
}
