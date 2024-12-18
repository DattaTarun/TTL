import com.myProject.TTL.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/sendMessage") // Clients send messages here
    @SendTo("/topic/community") // Broadcast to all subscribers
    public Message broadcastMessage(Message message) {
        return message; // Broadcast message to all clients subscribed to "/topic/community"
    }
}
