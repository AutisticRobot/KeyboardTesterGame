
function buyBoost(costType, boostType, cost, boostAmount)
{
    var canAfford = false;
    switch(costType)
    {
        case "board":
        if(cost <= boardCounter)
        {
            canAfford = true;
            boardCounter -= cost;
        }
        break;
        case "key":
            if(cost <= keyCounter)
            {
                canAfford = true;
                keyCounter -= cost;
            }
        break;
        case "money":
            if(cost <= wallet)
            {
                canAfford = true;
                wallet -= cost;
            }
        break;
    }

    switch(boostType)
    {
        case "board":
            if(canAfford)
            {
                boardMulti += boostAmount;
            }
        break;
        case "key":
            if(canAfford)
            {
                keyMulti += boostAmount;
            }
        break;
        case "money":
            if(canAfford)
            {
                moneyMulti += boostAmount;
            }
        break;
    }
}