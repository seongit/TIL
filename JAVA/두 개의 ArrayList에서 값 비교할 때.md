두 개의 ArrayList, ArrayList1과 ArrayList2가 주어졌고, ArrayList1에서 ArrayList2에 있는 데이터를 찾아 activeAt 값을 "Y"로 변경하려면 다음과 같은 방법을 사용할 수 있습니다:

java
```
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {
public static void main(String[] args) {
// Sample data in ArrayList1 and ArrayList2
List<Data> arrayList1 = new ArrayList<>();
List<Data> arrayList2 = new ArrayList<>();

        arrayList1.add(new Data("A", "N"));
        arrayList1.add(new Data("B", "N"));
        arrayList1.add(new Data("C", "N"));
        
        arrayList2.add(new Data("B", "N"));
        arrayList2.add(new Data("C", "N"));
        
        // Create a map for faster lookup
        Map<String, String> arrayList2Lookup = new HashMap<>();
        for (Data data : arrayList2) {
            arrayList2Lookup.put(data.getKey(), data.getActiveAt());
        }
        
        // Update the activeAt values in ArrayList1
        for (Data data : arrayList1) {
            if (arrayList2Lookup.containsKey(data.getKey())) {
                data.setActiveAt("Y");
            }
        }
        
        // Print the updated ArrayList1
        for (Data data : arrayList1) {
            System.out.println(data.getKey() + ": " + data.getActiveAt());
        }
    }
}

class Data {
private String key;
private String activeAt;

    public Data(String key, String activeAt) {
        this.key = key;
        this.activeAt = activeAt;
    }

    public String getKey() {
        return key;
    }

    public String getActiveAt() {
        return activeAt;
    }

    public void setActiveAt(String activeAt) {
        this.activeAt = activeAt;
    }
}
```
이 코드에서는 ArrayList2의 데이터를 빠르게 찾기 위해 arrayList2Lookup 맵을 사용하고, 그런 다음 ArrayList1을 반복하면서 arrayList2Lookup에 데이터가 있는 경우 activeAt 값을 "Y"로 업데이트합니다. 결과적으로 ArrayList1의 activeAt 값이 업데이트됩니다.