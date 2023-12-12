const assert = require('assert');

// function countBatteriesByHealth(presentCapacities) {
//   return {
//     healthy: 0,
//     exchange: 0,
//     failed: 0
//   };
// }

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  
  // counts = countBatteriesByHealth(presentCapacities);
  // assert(counts["healthy"] == 2);
  // assert(counts["exchange"] == 3);
  // assert(counts["failed"] == 1);
  // console.log("Done counting :)");
  let healthy = [];
  let exchange = [];
  let failed = [];
  for(let i=0; i<presentCapacities.length; i++)
    {
        if(presentCapacities[i]>=80 && presentCapacities[i]<=100)
        {
          healthy.push(presentCapacities[i]);
         }
        else if(presentCapacities[i]>=62 && presentCapacities[i]<80)
        {
          exchange.push(presentCapacities[i])
        }
       else 
        {
          failed.push(presentCapacities[i])
        }
    }

  let healthyCount = healthy.length;
  let exchangeCount = exchange.length;
  let failedCount = failed.length;
}

testBucketingByHealth();
