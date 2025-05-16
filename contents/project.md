### 🍽️ Comments-Of-Cuisine
**Tech Stack:** SpringBoot, MySQL, Redis, Mybatis-plus, RabbitMQ, JWT, Hutool

**Project Description:**
A local life service platform primarily based on user reviews. It implements a complete set of services including SMS login, merchant search, flash sale coupon acquisition, tweet publishing, friend following, like rankings, and follow push notifications.

**Project Link:** [View on Gitee](https://gitee.com/Richard_Tam/comments-of-cuisine)

**Key Responsibilities:**
*   Utilized Redis to address session sharing issues in a clustered environment. Established an interceptor chain, with a primary interceptor for user login validation and a secondary interceptor to handle token refresh, ensuring continuous user authentication.
*   Employed Redis for pre-warming caches of frequently accessed information, thereby reducing database load. Implemented a Bloom filter (based on Redisson) to prevent cache penetration, used a Caffeine L2 cache to mitigate cache avalanches, and applied mutex locks to resolve cache breakdown issues, significantly enhancing system concurrency.
*   Implemented optimistic locking to prevent inventory overselling and used Redisson distributed locks to ensure thread safety for "one order per person" in a clustered setup.
*   Leveraged RabbitMQ message queues combined with Lua scripts to decouple order eligibility checks from order placement, enabling an asynchronous ordering process and optimizing flash sale performance. Performance testing with JMeter, simulating 1000 users, demonstrated a reduction in average response time from 497ms to 89ms.

---

### 🍽️ 佳肴点评
**技术栈：** SpringBoot, MySQL, Redis, Mybatis-plus, RabbitMQ, JWT, Hutool

**项目介绍：**
一个以用户点评为主的本地生活服务平台。实现了短信登录、查询商家、秒杀优惠券、发布推文、好友关注、点赞排行、关注推送的完整业务。

**项目地址：** [Gitee 链接](https://gitee.com/Richard_Tam/comments-of-cuisine)

**负责内容：**
*   使用Redis解决集群模式下Session共享问题。搭建拦截器链，用一级拦截器完成用户登录校验，并使用二级拦截器解决Token刷新问题，提供持续用户认证。
*   使用Redis对高频访问信息进行缓存预热，降低数据库的访问压力。用布隆过滤器（基于Redisson）解决缓存穿透，用二级缓存Caffeine解决缓存雪崩，用互斥锁解决缓存击穿，提高了系统的并发能力。
*   使用乐观锁解决库存超卖问题，使用Redisson分布式锁解决集群模式下一人一单的线程安全问题。
*   使用RabbitMQ消息队列+Lua脚本对下单资格判断和下单进行解耦，实现异步下单流程，优化秒杀流程。模拟1000个用户进行下单，通过JMeter性能压测，发现平均响应时间由497ms降低到89ms。

---

### 💬 Intelligent Dialogue System
**Tech Stack:** SpringAI, Mybatis, MySQL, Redis, Swagger, Vue, Cursor, Ollama

**Project Description:**
This project is a full-stack intelligent dialogue system. The front-end utilizes the Cursor tool with GPT-4o for dynamic code generation, while the back-end integrates a locally deployed DeepSeek-R1 large model via the SpringAI framework. It supports multi-modal input (text/file/image), historical session management, new dialogue creation, and a real-time responsive interactive interface.

**Key Responsibilities:**
*   Developed the front-end project by dynamically generating Vue3 component code using Cursor-based GPT-4o prompt engineering strategies, with manual intervention for critical logic validation.
*   Built the RESTful API service layer based on SpringAI, achieving localized deployment and low-latency responses for the DeepSeek-R1 model through the Ollama framework.
*   Reduced latency by caching frequently accessed session data with Redis, and implemented persistent storage using Mybatis + MySQL.

---

### 💬 智能对话系统
**技术栈：** SpringAI, Mybatis, MySQL, Redis, Swagger, Vue, Cursor, Ollama

**项目介绍：**
本项目是一个全栈开发的智能对话系统，前端基于Cursor工具调用GPT-4o实现动态代码生成，后端通过SpringAI框架集成本地部署的DeepSeek-R1大模型，构建了支持多模态输入（文本/文件/图片）、历史会话管理、新建对话、实时响应的交互界面。

**负责内容：**
*   使用基于Cursor的GPT-4o提示工程策略，动态生成Vue3组件代码并人工介入关键逻辑校验，搭建前端项目。
*   基于SpringAI搭建RESTful API服务层，通过Ollama框架实现DeepSeek-R1模型的本地化部署与低延迟响应。
*   通过Redis缓存高频会话数据降低延迟，Mybatis+MySQL实现持久化存储。
