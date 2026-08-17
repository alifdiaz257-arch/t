export default function PrayerSchedule({data}){return <div className="prayer">{Object.entries(data||{}).map(([k,v])=><div key={k}><b>{k}</b><br/>{v}</div>)}</div>}
