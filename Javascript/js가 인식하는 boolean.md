~~~ javascript
<script type="text/javascript">
        var test1 = 'a';
        var test2 = '';
        var test3 = null;
        var test4 = undefined;
        var test5 = 0;
        var test6 = NaN;

        console.log(test1 + ' -> ' + (test1 ? 'true' : 'false'));   // true
        console.log(test2 + ' -> ' + (test2 ? 'true' : 'false'));   // false
        console.log(test3 + ' -> ' + (test3 ? 'true' : 'false'));   // false
        console.log(test4 + ' -> ' + (test4 ? 'true' : 'false'));   // false
        console.log(test5 + ' -> ' + (test5 ? 'true' : 'false'));   // false
        console.log(test6 + ' -> ' + (test6 ? 'true' : 'false'));   // false

        console.log('-----------------------------------------------------');
        console.log('(null == undefined) ? ' + (null == undefined ? 'true' : 'false'));     // true
        console.log('(null === undefined) ? ' + (null === undefined ? 'true' : 'false'));   // false
    </script>

~~~
