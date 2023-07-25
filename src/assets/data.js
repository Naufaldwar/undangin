const {
  IconBrush,
  IconUsers,
  IconTypography,
  IconDeviceMobile,
  IconCalendar,
  IconMail,
  IconMailOpened,
  IconMap,
  IconMusic,
  IconMovie,
  IconHeart,
} = require("@tabler/icons-react");

const datafitur = [
  {
    icon: <IconBrush size={25} color="#088395" />,
    title: "Desain Elegan & Modern",
    descript: "Undangan didesain dengan elegan & berkesan.",
  },
  {
    icon: <IconUsers size={25} color="#088395" />,
    title: "Jumlah Tamu Tanpa Batasan",
    descript: "Tidak ada biaya tambahan untuk berapapun tamu yang diundang",
  },
  {
    icon: <IconTypography size={25} color="#088395" />,
    title: "Custom Nama Tamu",
    descript:
      "Sertakan nama teman / saudara / keluarga di undanganmu agar lebih eksklusif.",
  },
  {
    icon: <IconDeviceMobile size={25} color="#088395" />,
    title: "Akses Dimana Saja",
    descript: "Akses undangan dari perangkat apapun dengan cepat.",
  },
  {
    icon: <IconCalendar size={25} color="#088395" />,
    title: "RSVP",
    descript: "Estimasi jumlah kehadiran dari orang-orang yang kamu sayangi.",
  },
  {
    icon: <IconMail size={25} color="#088395" />,
    title: "Amplop Digital",
    descript:
      "Terima amplop / hadiah dari tamu secara digital via transfer atau e-money.",
  },
  {
    icon: <IconMailOpened size={25} color="#088395" />,
    title: "Wedding Wishes",
    descript:
      "Biarkan undangan untuk membagikan kesan & pesan ataupun doa atas hari bahagiamu.",
  },
  {
    icon: <IconMap size={25} color="#088395" />,
    title: "Navigasi Lokasi",
    descript: "Permudah tamu undangan untuk menemukan lokasi acaramu.",
  },
  {
    icon: <IconCalendar size={25} color="#088395" />,
    title: "Tambahkan Ke Kalender",
    descript:
      "Biarkan tamu undanganmu menyimpan tanggal acaramu di google calendar mereka.",
  },
  {
    icon: <IconMusic size={25} color="#088395" />,
    title: "Background Music",
    descript:
      "Perkuat kesan dari acara spesialmu dengan musik pilihanmu di undanganmu.",
  },
  {
    icon: <IconMovie size={25} color="#088395" />,
    title: "Galeri Foto",
    descript:
      "Bagikan foto/video momen spesialmu dengan pasangan kepada para undangan.",
  },
  {
    icon: <IconHeart size={25} color="#088395" />,
    title: "Love Stories",
    descript: "Ceritakan kisah cintamu kepada para undangan.",
  },
];

const datatesti = [
  {
    name: "Putri & Fajri",
    testimoni: "Keren Banget , Sukses selalu",
  },
  {
    name: "Raka & Mitha",
    testimoni: "Pelayanannya Ramah, Hasilnya memuaskan banget 😍",
  },
];

const datacustomer1 = {
  bride_full_name: "Ikhda Miftakhul Ulumi",
  groom_full_name: "Naufal Dwi Ariananto",
  bride_nick_name: "Ikhda",
  groom_nick_name: "Naufal",
  bride_father_name: "Imam Budi Santoso",
  groom_father_name: "Sudarto",
  bride_mother_name: "Titiek Yulianti",
  groom_mother_name: "Anita Ariani",
  date_married: new Date("2023-07-25T00:00:00").toISOString(),
  bride_fb: "https://www.facebook.com/ikhda.miftakhululumii",
  groom_fb: "https://www.facebook.com/naufal.dwiarianano",
  bride_ig: "https://www.instagram.com/ikhda_miftakhul/",
  groom_ig: "https://www.instagram.com/naufal_dwiariananto/",
  bride_twitter: "https://twitter.com/ikhda_miftakhul",
  groom_twitter: "https://twitter.com/naufal_dwi",
  date_matrimony: "Sunday, 31 December 2023",
  time_matrimony: "10:00 AM - 12:00 PM",
  place_matrimony: "Masjid Al-Ikhlas",
  address_matrimony:
    "Jl. Raya Kedungmundu No. 1, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273",
  date_reception: "Sunday, 31 December 2023",
  time_reception: "12:00 PM - 14:00 PM",
  place_reception: "Gedung Serbaguna",
  address_reception:
    "Jl. Raya Kedungmundu No. 1, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273",
  matrimony_maps: "https://goo.gl/maps/snAJX2CqtWsCwyJW9",
  matrimony_calendar: "https://calendar.app.google/8NxPbhwywZv2v7Ca8",
  reception_calendar: "https://calendar.app.google/8NxPbhwywZv2v7Ca8",
  reception_maps: "https://goo.gl/maps/snAJX2CqtWsCwyJW9",
  link_streming: "https://www.youtube.com/embed/6v2L2UGZJAM",
};

const dataexample = {
  bride_full_name: "Juliet Capulet",
  groom_full_name: "Romeo Montague",
  bride_nick_name: "Juliet",
  groom_nick_name: "Romeo",
  bride_father_name: "Capulet",
  groom_father_name: "Montague",
  bride_mother_name: "Capulet",
  groom_mother_name: "Montague",
  date_married: new Date("2023-12-25T00:00:00Z").toISOString(),
  bride_fb: "https://www.facebook.com/juliet.capulet",
  groom_fb: "https://www.facebook.com/romeo.montague",
  bride_ig: "https://www.instagram.com/juliet_capulet/",
  groom_ig: "https://www.instagram.com/romeo_montague/",
  bride_twitter: "https://twitter.com/juliet_capulet",
  groom_twitter: "https://twitter.com/romeo_montague",
  date_matrimony: "Sunday, 31 December 2023",
  time_matrimony: "10:00 AM - 12:00 PM",
  place_matrimony: "St. Peter's Church",
  address_matrimony: "St. Peter's Church, 136 Clerkenwell Rd, London EC1R 5DL",
  date_reception: "Sunday, 31 December 2023",
  time_reception: "12:00 PM - 14:00 PM",
  place_reception: "The Ritz London",
  address_reception: "150 Piccadilly, St. James's, London W1J 9BR",
  matrimony_maps: "https://goo.gl/maps/o7LsroXgHhCwaFMZ7",
  matrimony_calendar: "https://calendar.app.google/8NxPbhwywZv2v7Ca8",
  reception_calendar: "https://calendar.app.google/8NxPbhwywZv2v7Ca8",
  reception_maps: "https://goo.gl/maps/o7LsroXgHhCwaFMZ7",
  link_streming: "https://www.youtube.com/embed/6v2L2UGZJAM",
};
export { datafitur, datatesti, datacustomer1, dataexample };
