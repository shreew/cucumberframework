package testRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="E:\\new workspace\\eclipse-workspace\\cucumber.Hybrid.Framework\\src\\main\\java\\featurefile\\login.feature",
		glue={"stepDefination"}		
		)
public class Logintestrunner {

}
