package newstepdefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewStepdefination {

	WebDriver driver;
	Scenario scn;

	@Before
	public void beforeMethod(Scenario scn)
	{
		this.scn=scn;
		scn.write("before going to set the system variable path for browser");	
		System.setProperty("webdriver.chrome.driver", "E:\\libaries\\chromedriver.exe");

	}

	/*@After
	public void afterMethod()
	{
		driver.quit();
	}*/
		
		@Given("^Open browser As \"([^\"]*)\"$")
		public void open_browser_As(String browserName)  {
		   if(browserName.equals("Chrome"))
		   {
			   driver=new ChromeDriver();
			   driver.manage().window().maximize();
		   
		   }else if(browserName.equals("Firefox")) {
			   
		   }
		   driver.manage().window().maximize();
		   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}

		@Given("^navigate to url As \"([^\"]*)\"$")
		public void navigate_to_url_As(String url) {
			driver.get(url);
			Assert.assertTrue(driver.getTitle().contains("CRMPRO"));
		    
		}

		@When("^enter user name As \"([^\"]*)\"$")
		public void enter_user_name_As(String username) {
			driver.findElement(By.name("username")).sendKeys(username);
		   
		}

		@When("^enter password As \"([^\"]*)\"$")
		public void enter_password_As(String userpass) {
			driver.findElement(By.name("password")).sendKeys(userpass);
		   
		}

		@Then("^clicked on Login Button$")
		public void clicked_on_Login_Button() throws InterruptedException  {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@type='submit']")).click();
		  
		}

		@Then("^user shoukd be on home page \"([^\"]*)\"$")
		public void user_shoukd_be_on_home_page(String arg1)  {
		   String title=driver.getTitle();
				   Assert.assertTrue(title.contains(title));
		}


}
