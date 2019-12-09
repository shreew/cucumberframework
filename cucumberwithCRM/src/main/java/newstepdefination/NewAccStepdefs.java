package newstepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import drivermanager.WebDriverManager;

public class NewAccStepdefs {
	WebDriver driver;
	Scenario scn;
	WebDriverManager browserManager;
	
	@Before
	public void beforeMethod(Scenario scn){
		this.scn=scn;
		browserManager = WebDriverManager.getInstanceOfWebDriverManager();
		driver = browserManager.getDriver();
	}
	
	/*@After
	public void afterMethod(Scenario scn){
		this.scn=scn;
		browserManager.CloseDriver();
		
	}*/
	@Given("^user should be on home page \"([^\"]*)\"$")
	public void user_should_be_on_home_page(String title)  {
		
		String home_title=driver.getTitle();
		Assert.assertEquals(title, home_title);
	    }

	@When("^verify user name as \"([^\"]*)\"$")
	public void verify_user_name_as(String username) {
		// Assert.assertTrue(username.contains("Mayuri"));
		scn.write("verify username contains :" + username);

		driver.switchTo().frame("mainpanel");
		String actualUname = driver.findElement(By.xpath("//td[contains(text(),'Mayuri Deshmukh')]")).getText();

		scn.write("actualUname username from appli :" + actualUname);
		Assert.assertTrue(actualUname.contains(username));

		//driver.switchTo().defaultContent();

	}

	@When("^navigate to new contact page$")
	public void navigate_to_new_contact_page() {
		scn.write("navigating to new contact page...");
		//driver.switchTo().frame("mainpanel");
		Actions act = new Actions(driver);
		WebElement contact = driver.findElement(By.xpath("//a[text()='Contacts']"));
		WebElement newContact = driver.findElement(By.xpath("//a[text()='New Contact']"));
		act.moveToElement(contact).build().perform();
		newContact.click();
		scn.write("navigated to new contact page...");

	}

	@Then("^enter firstname as \"([^\"]*)\"$")
	public void enter_firstname_as(String fname) {
		driver.findElement(By.id("first_name")).sendKeys(fname);
	}

	@Then("^enetr lastname as \"([^\"]*)\"$")
	public void enetr_lastname_as(String lname) {
		driver.findElement(By.id("surname")).sendKeys(lname);
	}

	@Then("^enter company name as \"([^\"]*)\"$")
	public void enter_company_name_as(String company) {
		driver.findElement(By.name("client_lookup")).sendKeys(company);
	}

	@Then("^click on save button$")
	public void click_on_save_button() {
		driver.findElement(By.xpath("//input[@type='submit' or value='Save']")).click();
	}
	
	
}
