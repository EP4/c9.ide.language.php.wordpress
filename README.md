c9.ide.language.php.wordpress
=============================

__Name__: WordPress Coding Standards Linter for Cloud9 

__Current Version__: 1.0.0 (2018-10-10)

__Author__: [EP4](https://ep4.com)

__Contributors__: [Dave Lavoie](https://github.com/davelavoie)

__License__: GPLv3 or later

Provides a linter in Cloud9 IDE for WordPress development using PHP CodeSniffer (PHPCS) based on WordPress Coding Standards (WPCS) and PHPCompatibility/PHPCompabitityWP rules.

Installation
------------
1. From the __Cloud9__ menu, select __Preferences__, then __Experimental__ -> __SDK__ and enable *Load Custom Plugins*, *Load Plugins From Workspace* and *Plugin Manager* toggles. For more details about Cloud9 Experimental Features, visit <https://docs.c9.io/docs/experimental-features> .

2. Open a Terminal from the menu __Window__ -> __New Terminal__.

3. Run these commands in the terminal for each project where you want to use the plugin:
 ```bash
 git clone git@github.com:EP4/c9.ide.language.php.wordpress.git
 cd c9.ide.language.php.wordpress
 c9 install .
 cd ..
 rm -fR c9.ide.language.php.wordpress
 ```
4. If you don't want to activate the plugin manually every time you open your Cloud9 project, you can enable it automatically. Click on the __Cloud9__ menu, select __Open Your Init Script__ and add the following code:
```javascript
services.pluginManager.loadPackage([
    "~/.c9/plugins/c9.ide.language.php.wordpress/package.json" 
])
```

5. Restart Cloud9. 

6. Use Cloud9 as usual, and warnings will be displayed in the IDE when working on PHP files if PHP CodeSniffer detects any error based on PHPCompatibilityWP & WordPress Coding Standards rules.

Usage
-----
This plugin will display errors found by PHPCS directly in the IDE, as you can see on the following screenshot:

![WordPress Coding Standards Linter for Cloud9](https://cloud.githubusercontent.com/assets/3408028/22844522/b6247d8c-efac-11e6-829d-1bdceaf100f8.png)

This plugin will do the following:

- [x] Run PHPCS on the current PHP file using WordPress Coding Standards and PHPCompatibility rules.
- [x] If errors are found, a warning icon will be displayed next to the line number.
- [x] When hovering that icon, a tooltip with a message explaining the error(s) will be displayed.
- [x] In the message, icons will be displayed for helping you distinguish if this is a warning or an error, and if it can be fixed automatically by PHPCBF.
- [x] In the message, the line and column where the error can be found in the code will be displayed inside parentheses.
- [x] In the code, errors will be underlined with a red dotted line, and highlighted in red so you can rapidly identify them. Please note that the highlighted characters might not actually be accurate.

This plugin won't do the following (yet):
- [ ] Run PHPCBF and fix issues automatically. You'll have to run PHPCBF from the Terminal, or fix issues manually based on the recommendations given.
- [ ] Allow the user to enable or disable specific standards and rules. You'll need to manually edit the settings of the plugin in the __phpcs_handler.js__ file which can be found in the __worker__ directory.
- [ ] Update itself automatically. At the moment, all rules must be updated manually. I'll update this plugin once in a while with the most recent rules available.

### Icons used in messages

Since there is no simple way to allow HTML in these tooltips, we use some custom Unicode characters for displaying more meaningful messages:

| Displayed Characters | Meaning                                                                                                                                                   |
| ---------------------| --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴 Red Circle        | The identified issue is considered to be an __error__ by PHPCS.                                                                                           |
| 🔶 Yellow Diamond    | The identified issue is considered to be a __warning__ by PHPCS.                                                                                          |
| ✔ Checkmark         | The issue can be __resolved automatically by running PHPCBF__.                                                                                            |
| 𝗪𝗣𝗖𝗦                | The issue was identified using __WordPress__ Coding Standards Rules.                                                                                      |
| 𝗣𝗛𝗣𝗖𝗼𝗺𝗽𝗮𝘁𝗶𝗯𝗶𝗹𝗶𝘁𝘆     | The issue was identified using __PHPCompatibility__ Rules.                                                                                                |
| ➀ to ➈              | Any number displayed in a circle represent the __severity__ level of the issue. ➄ is the default severity and is never displayed.                         |  
| (𝟏𝟐𝟑:𝟕𝟖𝟗)             | Numbers displayed inside parentheses refer to the __line__ and __column__ where the issue can be found. In this example, look at line 123 and column 789. |

Resources
----------

* PHP CodeSniffer : [GitHub Repo](https://github.com/squizlabs/PHP_CodeSniffer), [Wiki](https://github.com/squizlabs/PHP_CodeSniffer/wiki) & [Analysis of Coding Conventions for WP](https://squizlabs.github.io/PHP_CodeSniffer/analysis/WordPress/WordPress/index.html)
* WordPress Coding Standards : [GitHub Repo](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards), [Wiki](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki) & [Whitelisting code which flags errors](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki/Whitelisting-code-which-flags-errors)
* PHPCompatibility : [GitHub Repo](https://github.com/PHPCompatibility/PHPCompatibility)
* PHPCompatibilityWP : [GitHub Repo](https://github.com/PHPCompatibility/PHPCompatibilityWP)
* Cloud9 : [SDK](https://cloud9-sdk.readme.io/) & [API](https://apidoc.c9.io)

Changelog
---------

### 1.0.0 - 2018-10-10

* Updating PHP_CodeSniffer library to version 3.3.2.
* Updating WordPress Coding Standards to version 1.1.0.
* Updating PHPCompabitity standards to version 9.0.0.
* Adding PHPCompabitityWP 2.0.0 and PHPCompatibilityParagonie 1.0.0 standards.
* Increasing the stdout max output from 200KB to 500KB.
* Increasing the timeout from 5 to 10 seconds.
* Moving the checkmark icon (✔) after the position in the tooltip.
* Including license files for each coding standards.
* Removing the CSS rule used for hiding the debug bar since the plugin can be used without activating the debug mode now.
* Some code refactoring.
* Updating the 'Installation' section of the docs.

### 0.0.2a - 2017-02-13

* Updating WordPress Coding Standards with the latest release as of 2017-02-10.
* Updating PHPCompabitity standards with the latest release as of 2017-02-06

### 0.0.1 (alpha) - 2017-02-10

Initial release.