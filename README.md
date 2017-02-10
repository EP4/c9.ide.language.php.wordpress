c9.ide.language.php.wordpress
=============================

__Name__ : WordPress Coding Standards Linter for Cloud9 

__Current Version__: 0.0.1 (alpha)

__Author__ : [EP4](https://ep4.com)

__Contributors__ : [Dave Lavoie](https://github.com/davelavoie)

__License__ : GPLv3 or later

Provides a linter in Cloud9 IDE for WordPress development using PHP CodeSniffer (PHPCS) based on WordPress Coding Standards (WPCS) and PHPCompatibility rules.

Installation
------------
1. From the __Cloud9__ menu, select __Preferences__, then __Experimental__ -> __SDK__ and enable *Load Custom Plugins*, *Load Plugins From Workspace* and *Plugin Manager* toggles. For more details about Cloud9 Experimental Features, visit <https://docs.c9.io/docs/experimental-features> .

2. Open a Terminal from the menu __Window__ -> __New Terminal__.

3. Run these commands in the terminal:
 ```
 git clone git@github.com:EP4-Corporation/c9.ide.language.php.wordpress.git
 cd c9.ide.language.php.wordpress
 c9 install .
 cd ..
 rm -fR c9.ide.language.php.wordpress
 ```

4. Restart Cloud9 in Debug Mode by appending the __debug=2__ parameter to the URL. For example, if your workspace is accessible at https://ide.c9.io/username/workspace_name, you can enable the debug mode from https://ide.c9.io/username/workspace_name?debug=2 . You can also enable the debug mode simply from the menu __Tools__ -> __Developer__ -> __Start in Debug Mode__.
 ```diff
 - Please note the following: - 
 ```
 There is currently no other way to install custom plugins to Cloud9 than using the debug mode, since the Cloud9 API doesn't allow publishing new packages at the moment. See <https://community.c9.io/t/unable-to-publish-c9-package/6235>.

5. Use Cloud9 as usual, and warnings will be displayed in the IDE when working on PHP files if PHP CodeSniffer detects any error based on PHPCompatibility & WordPress Coding Standards.

Usage
-----
This plugin will display errors found by PHPCS directly in the IDE, as you can see on the following screenshot:

![WordPress Coding Standards Linter for Cloud9](https://cloud.githubusercontent.com/assets/3408028/22844522/b6247d8c-efac-11e6-829d-1bdceaf100f8.png)

This plugin will do the following:

* Run PHPCS on the current PHP file using WordPress Coding Standards and PHPCompatibility.
* If errors are found, a warning icon will be displayed next to the line number.
* When hovering that icon, a tooltip explaining the error will be displayed.
* In the message, icons will be displayed for helping you distinguish if this is a warning, an error, and if it can be fixed automatically by PHPCF.
* In the message, the line and column where the error can be found in the code will be displayed inside parenthesis.
* In the code, errors will be underlined with a red dotted line, and highlighted in red so you can rapidly identify them. Please note that the highlighted characters might not actually be accurate.
* Since the plugin can only run in debug mode and since a green debug bar is always displayed at the top of the screen when in debug mode, the plugin is also loading a CSS stylesheet in order to hide that annoying debug bar.

### Icons used in messages

Since there is no simple way to allow HTML in these tooltips, we use some custom unicode characters for displaying more meaningful messages:

| Displayed Characters | Meaning                                                                                                                                             |
| ---------------------| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴 Red Circle        | The identified issue is considered to be an __error__ by PHPCS.                                                                                         |
| 🔶 Yellow Diamond    | The identified issue is considered to be a __warning__ by PHPCS.                                                                                        |
| ✔ Checkmark         | The issue can be __resolved automatically by running PHPCBF__. Please note that the plugin doesn't run PHPCBF (and doesn't actually fix any issue).     |
| 𝗪𝗣𝗖𝗦               | The issue was identified using __WordPress__ Coding Standards Rules.                                                                                     |
| 𝗣𝗛𝗣𝗖𝗼𝗺𝗽𝗮𝘁𝗶𝗯𝗶𝗹𝗶𝘁𝘆    | The issue was identified using __PHPCompatibility__ Rules.                                                                                               |
| ➀ to ➈              | Any number displayed in a circle represent the __severity__ level of the issue. ➄ is the default severity and is never displayed.                       |
| (𝟏𝟐𝟑:𝟕𝟖𝟗)             | Numbers displayed inside parenthesis refer to the __line__ and __column__ where the issue can be found. In this example, look at line 123 and column 789.   |

Ressources
----------

* PHP CodeSniffer : [GitHub repo](https://github.com/squizlabs/PHP_CodeSniffer) & [Wiki](https://github.com/squizlabs/PHP_CodeSniffer/wiki)
* WordPress Coding Standards : [GitHub Repo](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards), [Wiki](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki) & [Whitelisting code which flags errors](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki/Whitelisting-code-which-flags-errors)
* PHPCompatibility : [GitHub Repo](https://github.com/wimg/PHPCompatibility)
* Cloud9 : [SDK](https://cloud9-sdk.readme.io/) & [API](https://apidoc.c9.io)