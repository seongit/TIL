Apache Commons Lang 라이브러리에는 StringUtils.trimToEmpty(String str).

Apache Commons Lang 라이브러리를 언급하는 경우 간단한 설명은 다음과 같습니다.

이 StringUtils.trimToEmpty(String str)메서드는 선행 및 후행 공백을 제거하여 입력 문자열을 자르고 ""입력이 이면 빈 문자열( )을 반환합니다 null. 입력이 이미 빈 문자열인 경우 입력 문자열을 있는 그대로 반환합니다.

````
import org.apache.commons.lang3.StringUtils;

public class Example {
public static void main(String[] args) {
String input = "  Hello, World!  ";
String trimmed = StringUtils.trimToEmpty(input);

        System.out.println("Original: '" + input + "'");
        System.out.println("Trimmed:  '" + trimmed + "'");
    }
}
````
이 예에서는 StringUtils.trimToEmpty()입력 문자열에서 공백을 잘라내는 데 메서드가 사용됩니다. 그런 다음 잘린 결과가 콘솔에 인쇄됩니다.