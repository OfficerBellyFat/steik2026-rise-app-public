import { z } from 'astro/zod';

const resourceSchema = z.object({
  label: z.string(),
  // Google Drive link. Optional while content is WIP; resources without a link
  // render as a disabled "Coming soon" button instead of a dead link.
  href: z.url().optional(),
});

const subjectSchema = z.object({
  title: z.string(),
  resources: z.array(resourceSchema),
});

const categorySchema = z.object({
  id: z.enum(['tka', 'utbk']),
  label: z.string(),
  subjects: z.array(subjectSchema),
});

const materiSchema = z.array(categorySchema);

export type MateriResource = z.infer<typeof resourceSchema>;
export type MateriSubject = z.infer<typeof subjectSchema>;
export type MateriCategory = z.infer<typeof categorySchema>;

// Parsed at build time so a malformed URL fails the build instead of shipping a dead link.
export const MATERI_CATEGORIES = materiSchema.parse([
  {
    id: 'tka',
    label: 'TKA',
    subjects: [
      {
        title: 'Matematika',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1qJlwc5niBaJthp7a9xf6u4GE-8k1MlgG/view?usp=drive_link' },
          { label: 'Paket soal 1', href: 'https://drive.google.com/file/d/1s8Jxw5kCFlWZLwWrdwI06hoE5WfQBatQ/view?usp=drive_link' },
          { label: 'Paket soal 2', href: 'https://drive.google.com/file/d/1G0C0U3icdFppQT58MmwnlvPyi1i4lVtl/view?usp=drive_link' },
        ],
      },
      {
        title: 'Bahasa Indonesia',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1AbR_NfWdtMZubTQKTUP_Tr2nM5SKnOqO/view?usp=drive_link' },
          { label: 'Paket soal', href: 'https://drive.google.com/file/d/1gx4qi2lMT2h00GPdiPixzbL7pgGWpv9f/view?usp=drive_link' },
        ],
      },
      {
        title: 'Bahasa Inggris',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1VowysD240-3y8d-V1LKC1OKioLh9tafZ/view?usp=drive_link' },
          { label: 'Paket soal', href: 'https://drive.google.com/file/d/1edTtKmwivhgwQ70i6FUnClBn28e_JyGT/view?usp=drive_link' },
        ],
      },
    ],
  },
  {
    id: 'utbk',
    label: 'UTBK',
    subjects: [
      {
        title: 'Penalaran Umum',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1XGrtzMRl0asb-x7L4RPGckTBTXCWgLau/view?usp=drive_link' },
          { label: 'Paket soal 1', href: 'https://drive.google.com/file/d/1qgniSmta8coUJFXqG4Gc7lhqZER0KuyL/view?usp=drive_link' },
          { label: 'Paket soal 2', href: 'https://drive.google.com/file/d/1wSJKyZxZPWTSCkd4Jo0toQXE2m_fV9xT/view?usp=drive_link' },
        ],
      },
      {
        title: 'Pengetahuan dan Pemahaman Umum',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1Iscr9LlE8Oy3o88MkO_2TOd0bzOyAMw-/view?usp=drive_link' },
          { label: 'Paket soal', href: 'https://drive.google.com/file/d/19gN0YG9jFAQTxt5PZwXDvdcbwyC1p6Da/view?usp=drive_link' },
        ],
      },
      {
        title: 'Pengetahuan dan Pemahaman Membaca',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1UX2xMfGDYls0FSMn_vRaJ4k3l5JJCvtX/view?usp=drive_link' },
          { label: 'Paket soal', href: 'https://drive.google.com/file/d/1MmjRTaLa5PTI-81qPQ_TBglm0m2iHs_y/view?usp=drive_link' },
        ],
      },
      {
        title: 'Pengetahuan Kuantitatif',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1RyEIKplXM_LmGGGRA4XuI6QlOt4et3gA/view?usp=drive_link' },
          { label: 'Paket soal 1', href: 'https://drive.google.com/file/d/1Kfm0EZAHn4_fldgOIjCbuHfJ99TJ5ZVr/view?usp=drive_link' },
          { label: 'Paket soal 2', href: 'https://drive.google.com/file/d/1o8NTDezTscx422Qg-v9_25AflP4UFJeu/view?usp=drive_link' },
        ],
      },
      {
        title: 'Literasi Bahasa Indonesia',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1X4RQqXnhWKKVbfeFPvLDWZnXW9jam-O-/view?usp=drive_link' },
          { label: 'Paket soal', href: 'https://drive.google.com/file/d/1fWHhiVXUKgFF3rtlEyWeuGiUnpY8oijU/view?usp=drive_link' },
        ],
      },
      {
        title: 'Literasi Bahasa Inggris',
        resources: [
          { label: 'Materi', href: 'https://drive.google.com/file/d/1iCZ4UKU65UEKq41H1_Cc4a0NdZzCNIcr/view?usp=drive_link' },
          { label: 'Paket soal', href: 'https://drive.google.com/file/d/11qkB_Z63ooLvxRhv1ujWbI7mcZBBFxU8/view?usp=drive_link' },
        ],
      },
      {
        title: 'Penalaran Matematika',
        resources: [
          { label: 'Materi' },
          { label: 'Paket soal 1' },
          { label: 'Paket soal 2' },
        ],
      },
    ],
  },
]);
