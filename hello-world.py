
import tensorflow as tf

hello = tf.constant('Hello Worldy Tensor!')

sess = tf.Session()

print(sess.run(hello))