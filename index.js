#!/usr/bin/env node
import boxen from 'boxen';
import chalk from 'chalk';

// Construct inner business content.
const newLine = '\n';
let html = '';
html += `
   ____________________________
 /|............................|  🌎  ${chalk.hex('#4B7BE5').underline('https://themetalhead.dev')}
| |:      Metal & Coffee      :|
| |:    ${chalk.bgWhite(' Software Engineer ')}   :|  🗣   ${chalk.hex('#B8E4F0').underline('https://twitter.com/metalandcoffee_')}
| |:     ,-.   _____   ,-.    :|
| |:    ( \`)) [_____] ( \`))   :|  🎙   ${chalk.hex('#7267CB').underline('https://twitch.tv/metalandcoffee_')}
|v|:     \`-\`   ' ' '   \`-\`    :|
|||:     ,______________.     :|  💻  ${chalk.hex('#A85CF9').underline('https://github.com/metalandcoffee')}
|||...../::::o::::::o::::\\.....|
|^|..../:::O::::::::::O:::\\....|  📷  ${chalk.hex('#4B7BE5').underline('https://instagram.com/metalandcoffee')}
|/\`---/--------------------\`---|
\`.___/ /====/ /=//=/ /====/____/  🔗  ${chalk.hex('#B8E4F0').underline('https://linkedin.com/in/eboniebutler')}
     \`--------------------'

`;

html += "Hi, I'm Ebonie. I'm a metal DJ. I'm a software engineer. And I have too many vinyls.";
html += newLine;
html += newLine;
html += "Let's grab a " + chalk.hex('#733C3C').overline('coffee...');
html += newLine;

console.log(html);
