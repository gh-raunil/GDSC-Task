function swapIds()
{
    let firstBox = querySelector("#first-box");
    let secondBox = querySelector("#second-box");
    let swap=0;
    if(swap==0)
    {
        let temp = firstBox.id;
        firstBox.id = secondBox.id;
        secondBox.id = temp;
        swap=1;
    }
    // else if(swap==1)
    // {
    //     firstBox.id = "first-box";
    //     secondBox.id = "second-box";
    //     swap=0;
    // }
    
}