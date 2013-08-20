Language Self Tester
===================

1. Purpose
===========

**language-self-tester** is an automatic language learning quizer, which quizes you on the correct **spelling** and **translation** of the foreign **word** you are learning.

2. Preparing word list
======================

First, put the word pairs in a file with the **.txt** extension, like *finnish.txt* and place it in the **tables** directory in the format like:

        punainen,red
        yksi,one

The first part("punainen' and yksi) being the language you want to learn

And the second part("red" and "one") being the language you are more familiar with.


3. Quiz	yourself!
================

1. Run the main program by installing the software dependency first, 

  `npm install`

2. Then the real thing, 

 `node main.js finnish`

 using the word list file we have just created.

4. Future
==================
1. Statistics on result of each test taken in order to see the progress
2. Timeline of all test taken in order to see how diligent you are
3. Easy-to-forget words should be more likely to appear in subsequent tests
