
```
public class CustomSorting {
public static void main(String[] args) {
ArrayList<CustomObject> A = new ArrayList<>();
A.add(new CustomObject("FNS"));
A.add(new CustomObject("RTN"));
A.add(new CustomObject("ING"));
A.add(new CustomObject("FNS"));
A.add(new CustomObject("ING"));

        A.sort(Comparator.comparing(obj -> {
            String status = obj.getAthorStusDstcd();
            if (status.equals("ING")) return 0;
            else if (status.equals("FNS")) return 1;
            else return 2;
        }));

        for (CustomObject obj : A) {
            System.out.println(obj);
        }
    }
}
```
이 예에는 AthorStusDstcd 필드가 있는 CustomObject 클래스가 있습니다. 'CustomObject' 인스턴스의 'ArrayList'를 생성하고 이를 'AthorStusDstcd'에 대한 다른 값으로 채웁니다.

정렬 논리는 Comparator.comparing()을 사용하여 Comparator 내에서 정의됩니다. 각 개체의 'AthorStusDstcd' 필드를 확인하고 숫자 값('ING'의 경우 0, 'FNS'의 경우 1, 'RTN'의 경우 2)을 할당하여 이 사용자 지정 순서에 따른 정렬을 용이하게 합니다.

마지막으로 A.sort()를 사용하여 이 사용자 정의 Comparator를 기반으로 ArrayList를 정렬한 다음 정렬된 개체를 인쇄하여 정렬을 확인합니다.