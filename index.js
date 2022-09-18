window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input');
    let permuteButton = document.getElementById('permute');
    let output = document.getElementById('output');
    let result;

    permuteButton.addEventListener('click', () => {
        output.replaceChildren();
        result = new Set();
        let str = input.value;

        if(!str) return;

        if(str.length > 8) {
            alert("String length can't be greater than 8");
            return;
        }

        let stringArr = str.split('');

        permute(stringArr, 0);
    });

    function permute(stringArr, l) {
        if(l >= stringArr.length) {
            let str = stringArr.join('');
            if(!result.has(str)) {
                result.add(str);

                let p = document.createElement('p');
                p.appendChild(document.createTextNode(str));
                output.appendChild(p);
            }
        }

        for(let i = l; i < stringArr.length; i++) {
            // b = [a, a = b][0];
            // [a, b] = [b, a];
            [stringArr[i], stringArr[l]] = [stringArr[l], stringArr[i]];

            permute([...stringArr], l + 1);

            [stringArr[i], stringArr[l]] = [stringArr[l], stringArr[i]];
        }
    }
});