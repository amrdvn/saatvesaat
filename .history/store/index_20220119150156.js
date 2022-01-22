}
const app = initializeApp(config); // firebase'i çalıştıran fonksiyon
const realDb = getDatabase(app); // veri tabanına verileri çek
const auth = getAuth(app) // kullanıcı işlemlerinde kullanılır
export { realDb, auth } // bu değişkenleri dışarıya çıkarır