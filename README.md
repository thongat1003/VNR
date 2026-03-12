# Bảo tàng số Lê Duẩn

Starter monolith bằng **Next.js App Router + TypeScript + Tailwind CSS + React Three Fiber** cho một website 3D tương tác kiểu bảo tàng lịch sử/triển lãm ảo.

## Vì sao chọn Next.js thay vì React thuần?
- SEO tốt hơn cho các trang nội dung như Timeline, Tư liệu, Giới thiệu.
- App Router giúp tổ chức route rõ ràng và phù hợp với monolith hiện đại.
- Tối ưu font, ảnh, metadata và chia tách client/server component tốt.
- Vẫn tích hợp React Three Fiber mượt qua client component và dynamic import.

## Các route có sẵn
- `/` Trang chủ
- `/museum` Không gian bảo tàng 3D
- `/timeline` Dòng thời gian trực quan
- `/media` Ảnh và video tư liệu
- `/about` Nguồn tư liệu và định hướng phát triển

## Cài đặt
Yêu cầu môi trường: Node.js mới (tham khảo docs Next.js hiện hành).

```bash
npm install
npm run dev
```

Mở trình duyệt tại:

```bash
http://localhost:3000
```

## Nếu muốn tạo project mới từ đầu
```bash
npx create-next-app@latest le-duan-virtual-museum --typescript --eslint --app
cd le-duan-virtual-museum
npm install three @react-three/fiber @react-three/drei lucide-react clsx tailwindcss @tailwindcss/postcss postcss
```

## Thay ảnh và video thật
1. Thay file placeholder trong `public/assets/hero`, `public/assets/media`, `public/assets/exhibits`.
2. Cập nhật mô tả trong:
   - `src/data/timeline.ts`
   - `src/data/exhibits.ts`
   - `src/data/media.ts`
3. Nếu dùng video thật, thêm URL video vào data model hoặc đổi card media thành component nhúng video.
4. Nếu dùng mô hình 3D thật, thay `ExhibitMesh` bằng mô hình glTF/GLB.

## Điểm mở rộng kỹ thuật
- Thêm audio guide, subtitle, lời thuyết minh.
- Thêm kiosk video trong mỗi phòng.
- Thêm minimap và chế độ guided tour.
- Thêm lazy loading theo từng khu vực.
- Kết nối CMS hoặc file JSON để quản lý hiện vật.

## Lưu ý về bản quyền và kiểm chứng
- Ảnh, video và tài liệu lịch sử nên ghi rõ nguồn, ngày, đơn vị phát hành.
- Nên xác minh quyền sử dụng trước khi xuất bản chính thức.
