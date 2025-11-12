import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

type NavItem = 'dashboard' | 'staff' | 'tasks' | 'analytics' | 'notifications' | 'profile';

const Index = () => {
  const [activeNav, setActiveNav] = useState<NavItem>('dashboard');

  const stats = [
    { label: 'Всего сотрудников', value: 255, icon: 'Users', color: 'bg-primary/20 text-primary' },
    { label: 'На месте', value: 174, icon: 'UserCheck', color: 'bg-accent/20 text-accent' },
    { label: 'Отпуск', value: 9, icon: 'Plane', color: 'bg-chart-4/20 text-chart-4' },
    { label: 'Отсутствуют', value: 67, icon: 'UserX', color: 'bg-destructive/20 text-destructive' },
  ];

  const statusData = [
    { label: 'Работают', value: 174, color: '#0EA5E9', percentage: 68 },
    { label: 'Отпуск', value: 9, color: '#9b87f5', percentage: 4 },
    { label: 'Больничный', value: 5, color: '#D946EF', percentage: 2 },
    { label: 'Отсутствуют', value: 67, color: '#8E9196', percentage: 26 },
  ];

  const progressData = [
    { label: 'ЭЦП', value: 100, total: 100, color: 'bg-accent' },
    { label: 'PIN выдано', value: 13, total: 255, color: 'bg-primary' },
    { label: 'Обучение просрочено', value: 0, total: 255, color: 'bg-chart-5' },
    { label: 'СИЗ выдано', value: 235, total: 255, color: 'bg-chart-4' },
  ];

  const weekData = [
    { day: 'Пн', value: 85, status: 'работа' },
    { day: 'Вт', value: 88, status: 'работа' },
    { day: 'Ср', value: 82, status: 'работа' },
    { day: 'Чт', value: 90, status: 'работа' },
    { day: 'Пт', value: 78, status: 'работа' },
    { day: 'Сб', value: 45, status: 'выходной' },
    { day: 'Вс', value: 40, status: 'выходной' },
  ];

  const notifications = [
    { icon: 'AlertTriangle', label: 'Срыв проекта', color: 'text-destructive', bgColor: 'bg-destructive/10' },
    { icon: 'XCircle', label: 'Отклонено', color: 'text-chart-5', bgColor: 'bg-chart-5/10' },
    { icon: 'Download', label: 'Обновление ПО', color: 'text-accent', bgColor: 'bg-accent/10' },
  ];

  const orders = [
    { id: '24', status: 'в работе', color: 'bg-accent text-white' },
    { id: '12', status: 'на утверждении', color: 'bg-primary text-white' },
    { id: '8', status: 'завершено', color: 'bg-muted text-muted-foreground' },
  ];

  const navItems = [
    { id: 'dashboard' as NavItem, icon: 'LayoutDashboard', label: 'Дашборд' },
    { id: 'staff' as NavItem, icon: 'Users', label: 'Персонал' },
    { id: 'tasks' as NavItem, icon: 'ClipboardList', label: 'Наряды' },
    { id: 'analytics' as NavItem, icon: 'BarChart3', label: 'Аналитика' },
    { id: 'notifications' as NavItem, icon: 'Bell', label: 'Уведомления' },
    { id: 'profile' as NavItem, icon: 'User', label: 'Профиль' },
  ];

  const analyticsData = {
    monthlyTrend: [
      { month: 'Янв', personnel: 240, tasks: 156, efficiency: 92 },
      { month: 'Фев', personnel: 248, tasks: 178, efficiency: 89 },
      { month: 'Мар', personnel: 255, tasks: 192, efficiency: 94 },
      { month: 'Апр', personnel: 255, tasks: 201, efficiency: 91 },
    ],
    departments: [
      { name: 'Строительство', count: 120, color: '#0EA5E9' },
      { name: 'Электрика', count: 45, color: '#9b87f5' },
      { name: 'Сантехника', count: 38, color: '#D946EF' },
      { name: 'Отделка', count: 52, color: '#8B5CF6' },
    ],
    safetyMetrics: [
      { label: 'Инциденты', value: 2, trend: 'down', color: 'text-accent' },
      { label: 'Нарушения', value: 5, trend: 'down', color: 'text-destructive' },
      { label: 'Проверки СИЗ', value: 48, trend: 'up', color: 'text-chart-4' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pb-24" style={{ width: '390px', minHeight: '844px', margin: '0 auto' }}>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-6 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground">
            {activeNav === 'dashboard' && 'Дашборд участка'}
            {activeNav === 'analytics' && 'Аналитика'}
            {activeNav === 'staff' && 'Персонал'}
            {activeNav === 'tasks' && 'Наряды'}
            {activeNav === 'notifications' && 'Уведомления'}
            {activeNav === 'profile' && 'Профиль'}
          </h1>
          <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
            <Icon name="Menu" size={20} className="text-primary" />
          </div>
        </div>

        {activeNav === 'dashboard' && (
          <>
            <div className="grid grid-cols-2 gap-3 animate-scale-in">
              {stats.map((stat, idx) => (
                <Card 
                  key={idx} 
                  className="p-4 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                    <Icon name={stat.icon} size={20} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

        <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="PieChart" size={16} className="text-primary" />
            Статус персонала
          </h3>
          <div className="space-y-3">
            {statusData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-foreground">{item.label}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{item.value}</span>
                </div>
                <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="absolute h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3 animate-scale-in">
          {progressData.map((item, idx) => (
            <Card 
              key={idx} 
              className="p-4 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {item.value === item.total ? '100%' : Math.round((item.value / item.total) * 100) + '%'}
                </div>
                <div className="text-xs text-muted-foreground mb-3">{item.label}</div>
                <Progress 
                  value={(item.value / item.total) * 100} 
                  className="h-1.5 bg-muted/30"
                />
                <div className="text-xs text-muted-foreground mt-2">{item.value} / {item.total}</div>
              </div>
              {item.value === item.total && (
                <div className="absolute top-2 right-2 animate-pulse-glow">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            Прогноз явки
          </h3>
          <div className="flex items-end justify-between gap-2 h-32">
            {weekData.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center h-24">
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      day.status === 'работа' ? 'bg-accent' : 'bg-muted'
                    } hover:opacity-80`}
                    style={{ 
                      height: `${day.value}%`,
                      animationDelay: `${idx * 0.1}s`
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{day.day}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="Bell" size={16} className="text-primary" />
            Уведомления
          </h3>
          <div className="space-y-2">
            {notifications.map((notif, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3 p-3 rounded-lg ${notif.bgColor} border border-white/5 hover:border-white/10 transition-all cursor-pointer`}
              >
                <div className={`w-8 h-8 rounded-full ${notif.bgColor} flex items-center justify-center ${notif.color}`}>
                  <Icon name={notif.icon} size={16} />
                </div>
                <span className="text-sm text-foreground">{notif.label}</span>
              </div>
            ))}
          </div>
        </Card>

            <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="ClipboardList" size={16} className="text-primary" />
                Наряды
              </h3>
              <div className="flex gap-4 justify-around">
                {orders.map((order, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 rounded-full ${order.color} flex items-center justify-center text-xl font-bold shadow-lg`}>
                      {order.id}
                    </div>
                    <span className="text-xs text-muted-foreground text-center">{order.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {activeNav === 'analytics' && (
          <>
            <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={16} className="text-primary" />
                Динамика за 4 месяца
              </h3>
              <div className="space-y-4">
                <div className="flex items-end justify-between h-40 gap-2">
                  {analyticsData.monthlyTrend.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full space-y-1">
                        <div 
                          className="w-full rounded-t-lg bg-primary transition-all duration-500 hover:opacity-80"
                          style={{ height: `${(item.personnel / 255) * 100}px` }}
                          title={`Персонал: ${item.personnel}`}
                        />
                        <div 
                          className="w-full rounded-t-lg bg-accent transition-all duration-500 hover:opacity-80"
                          style={{ height: `${(item.tasks / 255) * 80}px` }}
                          title={`Наряды: ${item.tasks}`}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{item.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-primary"></div>
                    <span className="text-muted-foreground">Персонал</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-accent"></div>
                    <span className="text-muted-foreground">Наряды</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Users" size={16} className="text-primary" />
                Распределение по отделам
              </h3>
              <div className="space-y-3">
                {analyticsData.departments.map((dept, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }}></div>
                        <span className="text-foreground">{dept.name}</span>
                      </div>
                      <span className="text-muted-foreground font-medium">{dept.count} чел.</span>
                    </div>
                    <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div 
                        className="absolute h-full rounded-full transition-all duration-500"
                        style={{ width: `${(dept.count / 255) * 100}%`, backgroundColor: dept.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-3 animate-scale-in">
              {analyticsData.safetyMetrics.map((metric, idx) => (
                <Card 
                  key={idx} 
                  className="p-4 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                    <Icon 
                      name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16} 
                      className={metric.trend === 'up' ? 'text-accent' : 'text-destructive'} 
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>

            <Card className="p-5 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Target" size={16} className="text-primary" />
                Эффективность работы
              </h3>
              <div className="space-y-4">
                {analyticsData.monthlyTrend.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{item.month}</span>
                      <span className="text-primary font-bold">{item.efficiency}%</span>
                    </div>
                    <Progress value={item.efficiency} className="h-2 bg-muted/30" />
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {activeNav !== 'dashboard' && activeNav !== 'analytics' && (
          <Card className="p-8 bg-card/40 backdrop-blur-md border border-white/10 shadow-lg animate-fade-in text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center">
                <Icon name="Construction" size={32} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">В разработке</h3>
                <p className="text-sm text-muted-foreground">Этот раздел скоро появится</p>
              </div>
            </div>
          </Card>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto bg-card/60 backdrop-blur-xl border-t border-white/10 shadow-2xl">
        <div className="grid grid-cols-6 gap-1 p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                activeNav === item.id 
                  ? 'bg-primary text-primary-foreground scale-105 shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-[9px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;