## Generate Password

This is a simple command line tool that David Lloyd <https://www.jamethiel.com> used to write some Mocha + Chai tests.

## Installation

Download the repository and then do:

> % npm install

## Help

    % node index.js -h
    Usage:
      node index.js [OPTION]

    Options:
      -b, --prefix=[ARG]  The prefix.
      -h, --help          Display this help.
      -l, --length=[ARG]  The password length.
      -m, --memorable     Should the password be memorable?
      -n, --number=[ARG]  Number of passwords to generate.
      -p, --pattern=[ARG] Pattern to match.

## Run the Tests

    % npm run test --scripts-prepend-node-path=auto
    
    > gen-passwords@1.0.0 test C:\Users\lloy0\WebstormProjects\gen-passwords
    > mocha || true
    
      test help
        √ Help should be displayed (60ms)
    
      test password
        √ Test default settings (58ms)
        √ Test length 6 (62ms)
        √ Test pattern [ab] (66ms)
        √ Test prefix "test-" (57ms)
        √ Test memorable password (58ms)
        √ Test generating 4 passwords (64ms)
       
      7 passing (431ms)
      
      Process finished with exit code 0

## LICENSE

Copyright 2020. David Lloyd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
