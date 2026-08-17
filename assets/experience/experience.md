### Academia

#### MEVIS

I wrote my bachelor thesis in collaboration with [MEVIS 
Fraunhofer ](https://www.mevis.fraunhofer.de/) where I 
researched how to use mechanistic interpretability (a subfield of explainable AI) to see if a multimodal medical transformer
has retained some "world knowledge" from its pretraining data. A lot of this research was inspired by anthropic's MI research on LLMS. The drive of this thesis was the lack of research done on medical vision transformers, with only only publication at the time exisiting, and only for vision transformers. 

There I, along side another student, used sparse auto-encoders (SAE) to obtains the most important features (a.k.a latents) of the medical transformer and see if those latetns had some representation of real world concepts such as "breast", "cancer", "malesion" etc.

![SAE-diagram](./tickz_standalone.pdf)

Here is a simple diagram explaining how the SAE works to extract the most meanignful activations from the transformer. If you are interested, I have attached the full thesis [here](Medical-depL-models-do-learn-about-the-world.pdf)

#### Teaching Assistant

I have been a teaching assitant for six classes: programming in C/C++; operating systems; software engineering; databases; automata, computatbility and complexity theory; and algorithms and data structures. I think the best part about it is having conversations with students that are also passionate about the subjects. Another benefit of this was the more, one on one, time with professors which provided me with a lot of help that would be harder to get otherwise. 

Having to teach a subject in tutorials also helped me a lot as it forced me to learn and go much deeper in the topics such that I can be ready for potential questions or to explain the reseasoning behind the concepts.

### Indsutry

#### German Aerospace Center (DLR)

ADD THE DLR LOGO.

At the DLR (during my internship) I began by having to rewrite the local satellite messaging system from C to C++ 17. This was challenging as the original system was blocking and had no multi-threading support. I did this chaleneg by mainly relying on the RabbitMQ and Bloomber std libraries which provided easy communication via queues while the Bloomber std provided thread pools and automatic thread management.

Towards the end of my internship and into my work study, I spent the next year primarely focused on working with the **galileo kopierzentrum** improving the
internal software that mointored and reported the status on the galileo and other satellites.
