
# Terminologies and Definitions 
This note consist of  keywords and definitions that are commonly used in AI community

### **[Time Major Format](https://stackoverflow.com/questions/48783798/whats-the-difference-between-data-time-major-and-batch-major)**

When in comes to RNNs, the tensors usually go to rank 3+, but the idea stays the same. If the input is `(batch_size, sequence_num, features)`, it's called **batch major**, because the 0 axis is the `batch_size`. If the input is (sequence_num, batch_size, features)`, it's called **time major** likewise. The `features` is always the last dimension (at least I don't know real cases when it's not), so there's no further variety in naming.

### **[Zero Vector]( )**
Zero vector is null vector, i.e, a vector whose magnitude is 0



### **[What is an Optimizer ?]( https://www.analyticsvidhya.com/blog/2021/10/a-comprehensive-guide-on-deep-learning-optimizers/#:~:text=An%20optimizer%20is%20a%20function,loss%20and%20improve%20the%20accuracy. )**

An optimizer is a function or an algorithm that modifies the attributes of the neural network, such as weights and learning  rate.  Thus, it helps in reducing the overall loss and improve the  accuracy
Common Terminologies

**Epoch**  – The number of times the algorithm runs on the whole training  dataset.

**Sample**  – A single row of a  dataset.

**Batch**  – It denotes the number of samples to be taken to for updating the model  parameters.

**Learning rate**  – It is a parameter that provides the model a scale of how much model weights should be  updated.

**Cost Function/Loss  Function**  – A cost function is used to calculate the cost that is the difference between the predicted value and the actual value.

**Weights/ Bias**  – The learnable parameters in a model that controls the signal between two neurons.





### **[Thought Vector](https://wiki.pathmind.com/thought-vectors)** 
A thought vector is like a  [_word vector_](http://deeplearning4j.org/word2vec.html#embed), which is typically a vector of 300-500 numbers that represent a word.  A word vector represents a word’s meaning as it relates to other words (its context) with a single column of numbers.
### **[Inference](https://hazelcast.com/glossary/machine-learning-inference/)** 
Inference refers to the process of using a trained machine learning algorithm to make a prediction. IoT data can be used as the input to a trained machine learning model, enabling predictions that can guide decision logic on the device, at the edge gateway or elsewhere in the IoT system

### **[GRU](https://www.techopedia.com/definition/33283/gated-recurrent-unit-gru)** 
A gated recurrent unit (GRU) is part of a specific model of recurrent neural network that intends to use connections through a sequence of nodes to perform machine learning tasks associated with memory and clustering, for instance, in speech recognition. Gated recurrent units help to adjust neural network input weights to solve the vanishing gradient problem that is a common issue with recurrent neural networks.
