import '@tensorflow/tfjs-node-gpu';
import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'linear'}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
// Generate some synthetic data for training.
const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);

// Train the model using the data.
console.log('entra');
model.fit(xs, ys, {
    epochs: 100,
    callbacks: {
        onEpochEnd: async (epoch, log) => {
            console.log(`Epoch ${epoch}: loss = ${log.loss}`);
        },
    },
}).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    console.log('entra');
});