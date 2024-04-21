```java
/**
     * requestDto를 JsonObject로 변환
     * @param obj
     * @return
     * @throws IllegalAccessException
     */
    private JSONObject requestDtoToJsonObject(Object obj) throws IllegalAccessException {
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        Field[] fields = obj.getClass().getDeclaredFields(); // 리플렉션을 사용해 객체에 선언된 모든 필드 가져옴

        for(Field field : fields){
            field.setAccessible(true);

            JSONObject parameter = new JSONObject();
            parameter.put("name", field.getName());
            parameter.put("value", field.get(obj));

            jsonArray.put(parameter);
        }
        jsonObject.put("parameter", jsonArray); // "parameter"를 키값으로 JSONArray를 추가
        return jsonObject;
    }
```