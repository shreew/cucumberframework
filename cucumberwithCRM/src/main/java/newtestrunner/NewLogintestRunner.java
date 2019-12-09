package newtestrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="E:\\new workspace\\eclipse-workspace\\cucumberwithCRM\\src\\main\\java\\newfeature\\createNewAccount.feature",
		glue= {"newstepdefination"},
		//format={"pretty","html:test-out"},
		monochrome = true,
				dryRun = false,
				plugin= {"pretty", "html:target/cucumber-report"}
		)
public class NewLogintestRunner {

}
