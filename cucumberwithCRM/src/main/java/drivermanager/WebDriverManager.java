package drivermanager;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverManager {

	//Instance of Singleton Class
		private static WebDriverManager instanceOfSingletonClass=null;
		private static WebDriver driver;
		
		//Private Constructor
		private WebDriverManager() {
			System.setProperty("webdriver.chrome.driver", "E:\\libaries\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}
		
		//To create instance of Class
		public static WebDriverManager getInstanceOfWebDriverManager() {
			
			if(instanceOfSingletonClass==null) {
				instanceOfSingletonClass = new WebDriverManager();
			}
			return instanceOfSingletonClass;
		}
		
		//to get Driver
		public  WebDriver getDriver() {
			if (driver==null) {
				System.setProperty("webdriver.chrome.driver",
						".//Drivers//chromedriver.exe");
				driver = new ChromeDriver();
				driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			}
			return driver;
		}
		
		
		public void CloseDriver() {
			if (!(driver==null)) {
				driver.quit();
				driver = null;
				
			}
		}
		
}
