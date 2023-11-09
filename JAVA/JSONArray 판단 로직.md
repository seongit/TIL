Write a Java function to check if the input String is a JSON array:


````
public class JsonArrayChecker {
    
    public static boolean isJsonArray(String input) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
        JsonNode jsonNode = objectMapper.readTree(input);
            return jsonNode.isArray();
        } catch (JsonProcessingException e) {
            return false; // Not a valid JSON
        }
    }

    public static void main(String[] args) {
        String userInput = "[1, 2, 3, 4]"; // Replace this with the user's input
        if (isJsonArray(userInput)) {
            System.out.println("The input is a JSON array.");
        } else {
            System.out.println("The input is not a JSON array.");
        }
    }
}
````
In this code, the isJsonArray function uses Jackson to attempt to parse the input String. If it successfully parses the JSON, it checks if the parsed object is an array using the isArray method. If it's an array, the function returns true; otherwise, it returns false.

Make sure to replace "[1, 2, 3, 4]" with the actual user input in the main method.

Remember to handle exceptions as needed, depending on your specific use case. If the input is not valid JSON, the code above will return false.