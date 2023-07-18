import org.example.Main;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestMain {

    @Test
    public void testAdd() {
        int result = Main.add(5, 6);
        assertTrue(result == 11);
    }
}
