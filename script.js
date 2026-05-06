const questions = [
  {
    type: "单选题",
    module: "机器学习任务",
    difficulty: "基础",
    title: "某电商平台希望根据用户历史浏览与购买记录，预测用户下周是否会购买某商品。这更接近哪类任务？",
    options: ["A. 无监督聚类", "B. 监督学习中的分类", "C. 强化学习", "D. 数据压缩"],
    answer: "B。目标标签是“是否购买”，属于二分类监督学习。"
  },
  {
    type: "单选题",
    module: "模型评估",
    difficulty: "基础",
    title: "在垃圾邮件检测中，如果更关注“被系统判为垃圾邮件的邮件中有多少真的垃圾邮件”，应主要查看哪个指标？",
    options: ["A. Precision", "B. Recall", "C. MSE", "D. SSE"],
    answer: "A。Precision 衡量预测为正类的样本中真正正类所占比例。"
  },
  {
    type: "单选题",
    module: "过拟合",
    difficulty: "基础",
    title: "某模型训练准确率 99%，测试准确率 70%，最可能的问题是？",
    options: ["A. 欠拟合", "B. 过拟合", "C. 数据已标准化", "D. 损失函数不存在"],
    answer: "B。训练表现远好于测试表现，是典型过拟合信号。"
  },
  {
    type: "单选题",
    module: "预处理",
    difficulty: "基础",
    title: "房价预测中同时使用“面积”和“距离市中心公里数”等不同单位特征，训练前通常应先做什么？",
    options: ["A. 标准化或归一化", "B. 删除所有连续特征", "C. 增加标签数量", "D. 只保留最大值"],
    answer: "A。标准化或归一化可以降低不同量纲对距离或优化过程的影响。"
  },
  {
    type: "单选题",
    module: "K-Means",
    difficulty: "基础",
    title: "在 K-Means 中，K 的含义是？",
    options: ["A. 特征个数", "B. 聚类簇数量", "C. 样本编号", "D. 学习率"],
    answer: "B。K 表示希望划分出的聚类中心或簇的数量。"
  },
  {
    type: "单选题",
    module: "逻辑回归",
    difficulty: "基础",
    title: "逻辑回归常用 Sigmoid 函数把线性输出映射到哪个范围？",
    options: ["A. [0, 1]", "B. [-10, 10]", "C. 所有整数", "D. [0, 1000]"],
    answer: "A。Sigmoid 输出可解释为正类概率。"
  },
  {
    type: "单选题",
    module: "集成学习",
    difficulty: "基础",
    title: "随机森林通过多棵决策树投票或平均来得到结果，体现的思想是？",
    options: ["A. 特征缩放", "B. 集成学习", "C. 主成分分析", "D. 梯度消失"],
    answer: "B。随机森林属于 Bagging 类集成方法。"
  },
  {
    type: "单选题",
    module: "数据划分",
    difficulty: "基础",
    title: "为了调参并最终估计泛化能力，更规范的数据划分方式是？",
    options: ["A. 训练集、验证集、测试集", "B. 只保留训练集", "C. 训练集反复当测试集", "D. 删除验证集和测试集"],
    answer: "A。训练集用于拟合，验证集用于调参，测试集用于最终评估。"
  },
  {
    type: "单选题",
    module: "PCA",
    difficulty: "中等",
    title: "PCA 第一主成分方向通常对应协方差矩阵的哪一项？",
    options: ["A. 最小特征值对应的特征向量", "B. 最大特征值对应的特征向量", "C. 任意一个样本向量", "D. 标签均值"],
    answer: "B。第一主成分选择投影方差最大的方向。"
  },
  {
    type: "单选题",
    module: "CNN",
    difficulty: "基础",
    title: "二维卷积层中，卷积核数量通常决定输出特征图的什么？",
    options: ["A. 通道数", "B. 样本数", "C. 标签种类", "D. 优化器类型"],
    answer: "A。一个卷积核通常产生一个输出通道。"
  },
  {
    type: "判断改错",
    module: "机器学习任务",
    difficulty: "基础",
    title: "只要使用了大量 if-else 规则，就可以称为机器学习模型。",
    answer: "错误。机器学习强调从数据中学习规律，而不是单纯手写固定规则。"
  },
  {
    type: "判断改错",
    module: "模型评估",
    difficulty: "基础",
    title: "测试集可以多次参与调参，只要最后重新训练模型即可。",
    answer: "错误。测试集应尽量只用于最终评估，否则会造成评估偏乐观。"
  },
  {
    type: "判断改错",
    module: "K-Means",
    difficulty: "基础",
    title: "K-Means 的初始中心不同，最终聚类结果可能不同。",
    answer: "正确。K-Means 对初始中心较敏感，常使用多次初始化。"
  },
  {
    type: "判断改错",
    module: "过拟合",
    difficulty: "基础",
    title: "正则化通常用于减轻过拟合，而不是单纯追求训练集得分最高。",
    answer: "正确。正则化通过约束模型复杂度提升泛化表现。"
  },
  {
    type: "判断改错",
    module: "PCA",
    difficulty: "基础",
    title: "PCA 是一种常见的无监督降维方法，不需要使用类别标签。",
    answer: "正确。PCA 只利用特征的方差与协方差结构。"
  },
  {
    type: "判断改错",
    module: "CNN",
    difficulty: "中等",
    title: "最大池化会保留池化窗口中的平均值。",
    answer: "错误。最大池化保留窗口中的最大值，平均池化才取平均值。"
  },
  {
    type: "简答题",
    module: "监督学习流程",
    difficulty: "基础",
    title: "简述完成一个监督学习项目时，从数据到评估的基本步骤。",
    answer: "可包括：获取数据、数据清洗与特征处理、划分训练/验证/测试集、训练模型、调参、用测试集评估、分析误差。"
  },
  {
    type: "简答题",
    module: "过拟合",
    difficulty: "基础",
    title: "说明过拟合产生的原因，并给出三种常见缓解方法。",
    answer: "原因通常是模型相对数据过于复杂或记住噪声。方法可包括增加数据、正则化、简化模型、交叉验证、提前停止、数据增强等。"
  },
  {
    type: "简答题",
    module: "KNN",
    difficulty: "基础",
    title: "KNN 在预测新样本时需要做哪些步骤？它在大数据集上的主要不足是什么？",
    answer: "步骤：计算新样本与训练样本距离、选最近 K 个样本、按多数表决或平均输出。主要不足是预测阶段计算量和存储开销较大。"
  },
  {
    type: "简答题",
    module: "PCA",
    difficulty: "中等",
    title: "为什么 PCA 通常需要先对数据中心化？第一主成分的直观含义是什么？",
    answer: "中心化后协方差能反映围绕均值的变化方向。第一主成分是使样本投影方差最大的方向。"
  },
  {
    type: "简答题",
    module: "CNN",
    difficulty: "中等",
    title: "简述卷积层中步长、Padding、卷积核尺寸分别会如何影响输出特征图尺寸。",
    answer: "卷积核越大输出通常越小；步长越大输出越小；Padding 增大可以保留边缘信息并增大输出尺寸。"
  },
  {
    type: "计算题",
    module: "模型评估",
    difficulty: "中等",
    title: "某二分类系统在 160 个测试样本上得到 TP=36、FP=12、FN=24、TN=88。计算 Accuracy、Precision、Recall 和 F1。",
    answer: "Accuracy=(36+88)/160=0.775；Precision=36/(36+12)=0.75；Recall=36/(36+24)=0.60；F1=2×0.75×0.60/(0.75+0.60)=0.667。"
  },
  {
    type: "计算题",
    module: "KNN",
    difficulty: "中等",
    title: "已知 A(0,1)、B(2,2) 属类别 0，C(4,2)、D(3,5) 属类别 1。新点 X(2,1)。计算 X 到各点欧氏距离，并判断 K=3 时类别。",
    answer: "d(X,A)=2，d(X,B)=1，d(X,C)=√5，d(X,D)=√17。最近三点为 B、A、C，其中类别 0 两票，预测为 0。"
  },
  {
    type: "计算题",
    module: "PCA",
    difficulty: "中等",
    title: "若协方差矩阵 S=diag(9,4)，判断第一主成分方向，并写出对应特征值。",
    answer: "第一主成分方向为 [1,0]^T，对应最大特征值 9。"
  },
  {
    type: "计算题",
    module: "PCA",
    difficulty: "中等",
    title: "若二维中心化数据在方向 u 上投影方差为 5，在方向 v 上投影方差为 2，且两个方向均为单位向量，PCA 会优先选择哪个方向？为什么？",
    answer: "选择方向 u，因为 PCA 第一主成分选择投影方差最大的单位方向。"
  },
  {
    type: "计算题",
    module: "CNN",
    difficulty: "中等",
    title: "输入尺寸为 6×6，卷积核 3×3，步长 S=1，Padding P=0。输出空间尺寸是多少？",
    answer: "输出边长为 (6-3+2×0)/1+1=4，因此输出空间尺寸为 4×4。"
  },
  {
    type: "计算题",
    module: "CNN",
    difficulty: "中等",
    title: "对矩阵 [[2,1,0,3],[1,5,2,0],[0,2,4,1],[3,1,0,2]] 做 2×2 最大池化，步长为 2，输出矩阵是多少？",
    answer: "四个窗口最大值分别为 5、3、3、4，输出 [[5,3],[3,4]]。"
  },
  {
    type: "推导题",
    module: "PCA",
    difficulty: "中等",
    title: "写出 PCA 第一主成分的最大方差目标，并说明为什么会得到特征向量方程 Sw=λw。",
    answer: "目标为 max w^T S w, s.t. w^T w=1。构造 L=w^T S w-λ(w^T w-1)，对 w 求导得 2Sw-2λw=0，因此 Sw=λw。"
  },
  {
    type: "推导题",
    module: "梯度下降",
    difficulty: "中等",
    title: "对一元线性回归损失 J(w)=1/2(wx-y)^2，写出 w 的梯度下降更新式。",
    answer: "∂J/∂w=(wx-y)x，因此更新式为 w←w-η(wx-y)x。"
  },
  {
    type: "推导题",
    module: "逻辑回归",
    difficulty: "中等",
    title: "说明逻辑回归为什么适合二分类概率建模。",
    answer: "逻辑回归先做线性组合 z=w^Tx+b，再用 Sigmoid 将 z 映射到 [0,1]，可解释为正类概率，并用阈值进行二分类。"
  },
  {
    type: "应用题",
    module: "模型评估",
    difficulty: "中等",
    title: "在疾病筛查中，如果漏诊代价远高于误诊，Precision 与 Recall 中更应优先关注哪个？",
    answer: "更应优先关注 Recall，因为 Recall 高表示真实患病者被检出的比例高，漏诊更少。"
  },
  {
    type: "应用题",
    module: "K-Means",
    difficulty: "中等",
    title: "做用户聚类时发现年龄特征范围 18-70，消费金额范围 0-50000。若不做标准化可能带来什么问题？",
    answer: "消费金额的数值范围更大，会在距离计算中占主导，使聚类结果被金额特征过度影响。"
  },
  {
    type: "应用题",
    module: "过拟合",
    difficulty: "中等",
    title: "训练决策树时，最大深度从 2 增加到 20，训练准确率持续升高，测试准确率先升后降。应如何选择模型？",
    answer: "应选择验证集或测试前验证过程表现最佳的中等深度模型，而不是训练准确率最高的最深模型。"
  },
  {
    type: "应用题",
    module: "PCA",
    difficulty: "中等",
    title: "用 PCA 把 30 维特征降到 2 维后，可视化更方便但分类准确率下降。请给出一个可能原因。",
    answer: "二维主成分可能丢失了对分类有用的信息；PCA 保留的是总体方差最大方向，不一定是最有判别力的方向。"
  },
  {
    type: "应用题",
    module: "CNN",
    difficulty: "中等",
    title: "为什么图像任务中卷积层比直接全连接层更常用？",
    answer: "卷积利用局部连接和权值共享，能提取局部空间特征，同时显著减少参数数量。"
  },
  {
    type: "综合题",
    module: "监督学习流程",
    difficulty: "中等",
    title: "设计一个学生成绩预警模型时，你会如何划分数据、选择指标，并避免数据泄漏？",
    answer: "可按时间或学生维度划分训练/验证/测试集；使用 Accuracy、Recall、F1 等指标，若关注预警漏报则重视 Recall；避免把期末成绩、未来行为或测试集统计量用于训练。"
  },
  {
    type: "综合题",
    module: "PCA",
    difficulty: "提高",
    title: "请解释“最大方差方向”和“最大特征值对应特征向量”之间的联系。",
    answer: "投影方差可写为 w^T S w，在单位长度约束下最大化该二次型。拉格朗日条件给出 Sw=λw，目标值等于 λ，因此最大方差方向对应最大特征值的特征向量。"
  }
];

const list = document.querySelector("#questionList");
const stats = document.querySelector("#questionStats");
const search = document.querySelector("#questionSearch");
const typeFilter = document.querySelector("#typeFilter");
const moduleFilter = document.querySelector("#moduleFilter");
const randomSet = document.querySelector("#randomSet");
const resetBank = document.querySelector("#resetBank");

function uniqueValues(key) {
  return [...new Set(questions.map((item) => item[key]))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderQuestions(items) {
  list.innerHTML = "";
  stats.textContent = `当前显示 ${items.length} / ${questions.length} 道题`;

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const options = item.options
      ? `<ol class="options">${item.options.map((option) => `<li>${option}</li>`).join("")}</ol>`
      : "";

    card.innerHTML = `
      <div class="question-meta">
        <span class="tag">${item.type}</span>
        <span class="tag alt">${item.module}</span>
        <span class="tag soft">${item.difficulty}</span>
      </div>
      <h3 class="question-title">${index + 1}. ${item.title}</h3>
      ${options}
      <details class="answer">
        <summary>查看参考要点</summary>
        <p>${item.answer}</p>
      </details>
    `;
    list.appendChild(card);
  });
}

function currentFilteredQuestions() {
  const keyword = search.value.trim().toLowerCase();
  const type = typeFilter.value;
  const module = moduleFilter.value;

  return questions.filter((item) => {
    const text = `${item.type} ${item.module} ${item.difficulty} ${item.title} ${(item.options || []).join(" ")} ${item.answer}`.toLowerCase();
    const matchesKeyword = !keyword || text.includes(keyword);
    const matchesType = type === "all" || item.type === type;
    const matchesModule = module === "all" || item.module === module;
    return matchesKeyword && matchesType && matchesModule;
  });
}

function applyFilters() {
  renderQuestions(currentFilteredQuestions());
}

function sampleQuestions(count) {
  const pool = currentFilteredQuestions();
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  renderQuestions(shuffled.slice(0, Math.min(count, shuffled.length)));
}

fillSelect(typeFilter, uniqueValues("type"));
fillSelect(moduleFilter, uniqueValues("module"));
renderQuestions(questions);

search.addEventListener("input", applyFilters);
typeFilter.addEventListener("change", applyFilters);
moduleFilter.addEventListener("change", applyFilters);
randomSet.addEventListener("click", () => sampleQuestions(8));
resetBank.addEventListener("click", () => {
  search.value = "";
  typeFilter.value = "all";
  moduleFilter.value = "all";
  renderQuestions(questions);
});
