

const fn = (str) => {
    let visited = {};
    let output = "";
    for (let start = 0, end = 0 ; end < str.length; end++) {
        let currChar = str.charAt(end);
        if (visited[currChar]) {
            console.log(currChar);
            start = Math.max(visited[currChar] + 1, start);
        }
        if (output.length < (end - start + 1)) {
            output = str.substring(start, end + 1);
        }
        visited[currChar] = end;
    }
    console.log(visited);
    return output.length;
}

function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]])  { 
            str += curr_char; 
            hash[chars[i]] = {index:i};
        } else {
            if(longest_string.length <= str.length) {
                longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index:j};
            }
        }
    }
        return longest_string.length > str.length ? longest_string : str;
    }

    const findLargestSubStringWithUniqueChars = (str) => {
        const length = str.length;
        if (str.length === 1) {
            return str;
        }
        let temp  = [];
        for (let i = 0; i < length; i++) {
            let current = str[i];
            if (temp.indexOf(current) != -1) {
                temp = temp.slice(temp.indexOf(current) + 1);
            }
            temp.push(current);
        }
        return temp.join("");
    }


    function lengthOfLongestSubstring(s) {
  
        if (s.length <= 1)
          return s.length
        
        let lookup = new Map()
        let len = s.length
        let max = 0
        let start = 0
        
        for (let i = 0; i < len; i++) {
          let c = s.charAt(i)
          
          if (lookup.has(c) && lookup.get(c) >= start) {
            start = lookup.get(c) + 1; // Read the logic in the notes above
          }
          
          lookup.set(c, i)
          
          max = Math.max(max, i - start + 1)
        }
        
        return max;
      }

