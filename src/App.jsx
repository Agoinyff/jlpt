import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Calendar, Trophy, Heart, Coffee } from 'lucide-react';

const FinalSprintPlan = () => {
  const [progress, setProgress] = useState({});
  const [currentDay, setCurrentDay] = useState(1);

 useEffect(() => {
  // 从 localStorage 加载进度
  try {
    const saved = localStorage.getItem('jlpt-final-sprint');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  } catch (error) {
    console.log('首次使用，初始化进度');
  }
}, []);

const saveProgress = (newProgress) => {
  // 保存到 localStorage
  try {
    localStorage.setItem('jlpt-final-sprint', JSON.stringify(newProgress));
  } catch (error) {
    console.error('保存失败:', error);
  }
};

  const getDateInfo = (day) => {
    const startDate = new Date('2025-11-26');
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + day - 1);
    
    const month = date.getMonth() + 1;
    const dayNum = date.getDate();
    const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
    const dayName = dayNames[date.getDay()];
    
    return { month, dayNum, dayName, date };
  };

  const plans = {
    1: {
      title: 'Day 1 - 状态检测',
      morning: [
        { id: 'm1', task: '完整听力1套（50分钟）', detail: '严格计时，记录分数' },
        { id: 'm2', task: '对答案+分析错题（40分钟）', detail: '错几题？哪种题型？' },
        { id: 'm3', task: '阅读3篇（30分钟）', detail: '保持速度' }
      ],
      afternoon: [
        { id: 'a1', task: '词汇语法53题（50分钟）', detail: '词汇+语法混合练习' },
        { id: 'a2', task: '错题整理（30分钟）', detail: '记录到错题本' },
        { id: 'a3', task: '听力场景词汇复习（30分钟）', detail: '高频场景表达' }
      ],
      note: '今天重点：检验真实水平，记录基准分数'
    },
    2: {
      title: 'Day 2 - 听力专项',
      morning: [
        { id: 'm1', task: '问题1+2专项训练（60分钟）', detail: '即时应答+要点理解各30题' },
        { id: 'm2', task: '完整听力1套（50分钟）', detail: '检验简单题准确率' },
        { id: 'm3', task: '错题重听+跟读（30分钟）', detail: '重点：问题1-2的错题' }
      ],
      afternoon: [
        { id: 'a1', task: '词汇50题（30分钟）', detail: '选择题形式' },
        { id: 'a2', task: '语法40题（30分钟）', detail: '重点：易混淆语法' },
        { id: 'a3', task: '阅读2篇（30分钟）', detail: '保持手感' }
      ],
      note: '今天重点：确保听力简单题型不失分'
    },
    3: {
      title: 'Day 3 - 完整模考',
      morning: [
        { id: 'm1', task: '完整模拟考（165分钟）', detail: '语言知识+阅读+听力全套' },
        { id: 'm2', task: '休息15分钟', detail: '伸展+喝水' }
      ],
      afternoon: [
        { id: 'a1', task: '对答案+记录分数（30分钟）', detail: '语言___分 阅读___分 听力___分' },
        { id: 'a2', task: '错题分析（60分钟）', detail: '为什么错？是知识点还是粗心？' },
        { id: 'a3', task: '整理错题到本子（30分钟）', detail: '分类：词汇/语法/阅读/听力' }
      ],
      note: '今天重点：完整模考，检验真实水平（目标≥120分）'
    },
    4: {
      title: 'Day 4 - 词汇语法强化',
      morning: [
        { id: 'm1', task: '词汇专项100题（60分钟）', detail: '包含近义词、搭配、用法' },
        { id: 'm2', task: '语法专项80题（60分钟）', detail: '重点：Day1-3错过的语法点' }
      ],
      afternoon: [
        { id: 'a1', task: '听力1套（50分钟）', detail: '保持听力语感' },
        { id: 'a2', task: '阅读4篇（40分钟）', detail: '提高阅读速度' },
        { id: 'a3', task: '复习前3天错题（30分钟）', detail: '重做一遍，确保掌握' }
      ],
      note: '今天重点：针对性强化语言知识部分'
    },
    5: {
      title: 'Day 5 - 休息日 🎉',
      morning: [
        { id: 'm1', task: '睡到自然醒', detail: '不设闹钟！' },
        { id: 'm2', task: '出去散步1小时', detail: '晒太阳，呼吸新鲜空气' },
        { id: 'm3', task: '做喜欢的事', detail: '看电影/运动/聊天/任何让你开心的' }
      ],
      afternoon: [
        { id: 'a1', task: '轻度复习（可选）', detail: '翻翻错题本，不强求记住' },
        { id: 'a2', task: '准备明天的材料', detail: '整理文具、题目' },
        { id: 'a3', task: '早点睡觉', detail: '22:00前上床，23:00前睡着' }
      ],
      note: '今天重点：完全放松！你已经很努力了，给自己一天假期！'
    },
    6: {
      title: 'Day 6 - 完整模考',
      morning: [
        { id: 'm1', task: '完整模拟考第2套（165分钟）', detail: '严格按考试流程' }
      ],
      afternoon: [
        { id: 'a1', task: '对答案+记录分数（30分钟）', detail: '对比Day3的分数，是否稳定？' },
        { id: 'a2', task: '错题深度分析（60分钟）', detail: '和Day3对比，哪些是重复错误？' },
        { id: 'a3', task: '整理高频错题（30分钟）', detail: '制作"必看错题清单"' }
      ],
      note: '今天重点：第二次模考，检验稳定性（目标≥120分）'
    },
    7: {
      title: 'Day 7 - 阅读听力平衡',
      morning: [
        { id: 'm1', task: '听力问题3-5专项（60分钟）', detail: '长对话和综合理解20题' },
        { id: 'm2', task: '听力错题重听（30分钟）', detail: '前6天所有听力错题' },
        { id: 'm3', task: '阅读限时训练（30分钟）', detail: '3篇，每篇7分钟' }
      ],
      afternoon: [
        { id: 'a1', task: '词汇语法混合50题（40分钟）', detail: '保持手感' },
        { id: 'a2', task: '阅读3篇（30分钟）', detail: '不同题材' },
        { id: 'a3', task: '听写20个高频词（30分钟）', detail: '听音频写假名+汉字' }
      ],
      note: '今天重点：平衡训练，不偏废任何科目'
    },
    8: {
      title: 'Day 8 - 综合训练',
      morning: [
        { id: 'm1', task: '听力1套（50分钟）', detail: '保持听力语感' },
        { id: 'm2', task: '阅读5篇（50分钟）', detail: '限时训练，提高速度' },
        { id: 'm3', task: '错题回顾（30分钟）', detail: '复习前6天的错题' }
      ],
      afternoon: [
        { id: 'a1', task: '词汇60题（40分钟）', detail: '高频词汇' },
        { id: 'a2', task: '语法60题（40分钟）', detail: '易混淆语法' },
        { id: 'a3', task: '听写20个单词（30分钟）', detail: '听音频写假名+汉字' }
      ],
      note: '今天重点：全面训练，保持各科手感'
    },
    9: {
      title: 'Day 9 - 弱项突破',
      morning: [
        { id: 'm1', task: '听力1套（50分钟）', detail: '重点关注简单题准确率' },
        { id: 'm2', task: '针对最弱题型训练（60分钟）', detail: '问题1错多？练问题1。语法错多？练语法' },
        { id: 'm3', task: '错题回顾（30分钟）', detail: '复习Day1-6的所有错题' }
      ],
      afternoon: [
        { id: 'a1', task: '词汇60题（40分钟）', detail: '高频词汇' },
        { id: 'a2', task: '语法60题（40分钟）', detail: '易混淆语法' },
        { id: 'a3', task: '阅读3篇（30分钟）', detail: '保持速度' }
      ],
      note: '今天重点：针对性攻克最弱环节'
    },
    10: {
      title: 'Day 10 - 最后模考',
      morning: [
        { id: 'm1', task: '完整模拟考第3套（165分钟）', detail: '最后一次完整模考，认真对待' }
      ],
      afternoon: [
        { id: 'a1', task: '对答案+记录（30分钟）', detail: '语言___分 阅读___分 听力___分 总分___' },
        { id: 'a2', task: '对比3次模考成绩（30分钟）', detail: 'Day3: ___ Day6: ___ Day10: ___ 是否稳定？' },
        { id: 'a3', task: '整理考试用品（30分钟）', detail: '准考证/身份证/铅笔/橡皮/手表' },
        { id: 'a4', task: '写给自己的话（30分钟）', detail: '我已经准备好了！明天只需正常发挥！' }
      ],
      note: '今天重点：最后检验，准备考试物品和心态'
    },
    11: {
      title: 'Day 11 - 考前一天（12月6日）',
      morning: [
        { id: 'm1', task: '起床后看错题本（30分钟）', detail: '只看不做，快速浏览' },
        { id: 'm2', task: '听力场景词汇复习（30分钟）', detail: '高频表达最后过一遍' },
        { id: 'm3', task: '散步或轻度运动（30分钟）', detail: '放松身体' }
      ],
      afternoon: [
        { id: 'a1', task: '看看语法笔记（30分钟）', detail: '易混淆语法最后确认' },
        { id: 'a2', task: '准备明天的路线和时间', detail: '确认考场位置，计划出发时间' },
        { id: 'a3', task: '放松活动', detail: '看电影/听音乐/做喜欢的事' },
        { id: 'a4', task: '21:00前睡觉！', detail: '明天要早起，今晚必须睡好！' }
      ],
      note: '今天重点：轻度复习+放松心态+早睡！不要熬夜！明天就是考试日！'
    }
  };

  const toggleTask = (day, taskId) => {
    const key = `d${day}-${taskId}`;
    const newProgress = {
      ...progress,
      [key]: !progress[key]
    };
    setProgress(newProgress);
    saveProgress(newProgress);
  };

  const isTaskCompleted = (day, taskId) => {
    return progress[`d${day}-${taskId}`] || false;
  };

  const getDayProgress = (day) => {
    const plan = plans[day];
    if (!plan) return { completed: 0, total: 0 };
    
    const allTasks = [...plan.morning, ...plan.afternoon];
    const completed = allTasks.filter(task => 
      isTaskCompleted(day, task.id)
    ).length;
    return { completed, total: allTasks.length };
  };

  const getTotalProgress = () => {
    let totalCompleted = 0;
    let totalTasks = 0;
    for (let day = 1; day <= 11; day++) {
      const dayProg = getDayProgress(day);
      totalCompleted += dayProg.completed;
      totalTasks += dayProg.total;
    }
    return { completed: totalCompleted, total: totalTasks };
  };

  const dateInfo = getDateInfo(currentDay);
  const plan = plans[currentDay];
  const dayProg = getDayProgress(currentDay);
  const totalProg = getTotalProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 头部信息 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                JLPT N2 最后11天冲刺 💪
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>考试日期：2025年12月7日</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span>目标：111分（你的水平：130分✨）</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-indigo-600">
                {Math.round((totalProg.completed / totalProg.total) * 100)}%
              </div>
              <div className="text-sm text-gray-600 mt-1">总完成度</div>
              <div className="text-xs text-gray-500 mt-2">
                {totalProg.completed}/{totalProg.total} 任务
              </div>
            </div>
          </div>

          {/* 天数选择 */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[...Array(11)].map((_, i) => {
              const day = i + 1;
              const info = getDateInfo(day);
              const prog = getDayProgress(day);
              const isRestDay = day === 5;
              const isToday = info.date.toDateString() === new Date().toDateString();
              
              return (
                <button
                  key={day}
                  onClick={() => setCurrentDay(day)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium transition-all ${
                    currentDay === day
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : isRestDay
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${isToday ? 'ring-2 ring-yellow-400' : ''}`}
                >
                  <div className="text-xs opacity-80">{info.month}/{info.dayNum}</div>
                  <div className="font-bold">Day {day}</div>
                  <div className="text-xs mt-1">
                    {prog.completed}/{prog.total}
                  </div>
                  {isRestDay && <div className="text-xs">🎉休息</div>}
                  {isToday && <div className="text-xs">📍今天</div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* 当日计划 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{plan.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {dateInfo.month}月{dateInfo.dayNum}日 星期{dateInfo.dayName}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-600">
                {dayProg.completed}/{dayProg.total}
              </div>
              <div className="text-sm text-gray-600">今日完成</div>
            </div>
          </div>

          {/* 进度条 */}
          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(dayProg.completed / dayProg.total) * 100}%` }}
              />
            </div>
          </div>

          {/* 上午任务 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-bold text-gray-700">上午任务</h3>
            </div>
            <div className="space-y-3">
              {plan.morning.map((task, index) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(currentDay, task.id)}
                  className="p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-all border-2 border-gray-100 hover:border-indigo-200"
                >
                  <div className="flex items-start gap-3">
                    {isTaskCompleted(currentDay, task.id) ? (
                      <CheckSquare className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400">#{index + 1}</span>
                        <div className={`font-medium ${
                          isTaskCompleted(currentDay, task.id)
                            ? 'line-through text-gray-400'
                            : 'text-gray-800'
                        }`}>
                          {task.task}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{task.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 下午任务 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-pink-500" />
              <h3 className="text-lg font-bold text-gray-700">下午任务</h3>
            </div>
            <div className="space-y-3">
              {plan.afternoon.map((task, index) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(currentDay, task.id)}
                  className="p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-all border-2 border-gray-100 hover:border-pink-200"
                >
                  <div className="flex items-start gap-3">
                    {isTaskCompleted(currentDay, task.id) ? (
                      <CheckSquare className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400">#{index + 1}</span>
                        <div className={`font-medium ${
                          isTaskCompleted(currentDay, task.id)
                            ? 'line-through text-gray-400'
                            : 'text-gray-800'
                        }`}>
                          {task.task}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{task.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 今日重点 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4">
            <div className="font-bold text-orange-800 mb-2">📌 今日重点</div>
            <div className="text-sm text-orange-700">{plan.note}</div>
          </div>
        </div>

        {/* 鼓励话语 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">💪 给你的话</h3>
          <div className="space-y-2 text-sm">
            <p>✨ 你的模考总分130分，远超目标111分！</p>
            <p>✨ 你已经刷完所有真题，基础非常扎实！</p>
            <p>✨ 现在只需要保持状态，正常发挥就能过！</p>
            <p>✨ 每完成一个任务就打勾，让焦虑变成成就感！</p>
            <p className="text-lg font-bold mt-4">🎯 你可以的！12月8日，等你的好消息！</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSprintPlan;
