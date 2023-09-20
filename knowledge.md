
route "/" => component render là "page.tsx" nằm ở ngoài cùng

route "/admin" => cần tạo folder "admin" và tạo file page.tsx

-nested route -> admin/phuc  là tạo thêm 1 folder trong folder trên và file là page.tsx


-dynamic routes -> property/1 or property/2 or property/3 or property/:slug 

-dynamic routes -> /blog/[id]/page.tsx ,/blog/[slug]/page.tsx


-Link của next/link kiểu như navigate, dùng để mở tab khác thì dùng thẻ a

-Dùng Link với href có slug  href={"/property/city-land"} fix cứng slug

-cách lấy slug từ URL: truyền vào bên trong paramer của component ({ params }: { params: { slug: string } }) -> lấy ra : {params.slug}