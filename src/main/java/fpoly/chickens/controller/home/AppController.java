package fpoly.chickens.controller.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"/app", "/app/sales-method"})
public class AppController {
	@RequestMapping()
	public String view_App() {
		return "redirect:/assets/user_store/layout_user-store.html";
	}
	
}
