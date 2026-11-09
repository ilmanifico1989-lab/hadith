import { useState } from 'react'
import './App.css'

const books = [
  ['صحيح البخاري', 'الإمام محمد بن إسماعيل البخاري'],
  ['صحيح مسلم', 'الإمام مسلم بن الحجاج'],
  ['سنن أبي داود', 'الإمام أبو داود السجستاني'],
  ['جامع الترمذي', 'الإمام محمد بن عيسى الترمذي'],
  ['سنن النسائي', 'الإمام أحمد بن شعيب النسائي'],
  ['سنن ابن ماجه', 'الإمام محمد بن يزيد ابن ماجه'],
]

function App() {
  const [query, setQuery] = useState('')

  return (
    <main dir="rtl">
      <header>
        <div className="brand">
          <span className="logo">ح</span>
          <div>
            <strong>المكتبة الحديثية</strong>
            <small>منصة البحث والتوثيق الحديثي</small>
          </div>
        </div>
        <nav>
          <a href="#home">الرئيسية</a>
          <a href="#books">مصادر الحديث</a>
          <a href="#method">منهجية المكتبة</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <span className="tag">منصة علمية للبحث والتحقيق</span>
        <h1>السنة النبوية<br /><span>مصادرها وطرق توثيقها</span></h1>
        <p>منصة متخصصة في البحث في مصادر الحديث النبوي، وعرض الروايات والتخريج وأحكام العلماء مع توثيق المراجع.</p>

        <div className="search">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="ابحث بلفظ الحديث أو اسم الراوي..."
          />
          <button onClick={() => alert('سيتم ربط البحث بقاعدة البيانات في المرحلة القادمة.')}>بحث</button>
        </div>
        <small>محرك البحث قيد التطوير وربطه بمصادر البيانات.</small>
      </section>

      <section className="content" id="books">
        <span className="tag">مصادر السنة النبوية</span>
        <h2>مصادر الحديث الأساسية</h2>
        <p className="muted">تصفح المصنفات الحديثية الستة.</p>

        <div className="grid">
          {books.map((book, i) => (
            <article className="book" key={book[0]}>
              <span className="number">0{i + 1}</span>
              <div className="book-icon">ك</div>
              <h3>{book[0]}</h3>
              <p>{book[1]}</p>
              <div className="footer">عرض المصدر <span>←</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="method">
        <h2>منهجية المكتبة</h2>
        <div className="method-grid">
          <div><b>01</b><h3>دقة النقل</h3><p>إثبات نصوص الروايات من مصادرها.</p></div>
          <div><b>02</b><h3>توثيق التخريج</h3><p>ربط الحديث بمصدره وموضعه.</p></div>
          <div><b>03</b><h3>تحرير الأحكام</h3><p>نقل أحكام العلماء مع عزوها.</p></div>
        </div>
      </section>

      <footer>
        <span>المكتبة الحديثية</span>
        <span>مشروع علمي قيد التطوير</span>
      </footer>
    </main>
  )
}

export default App
