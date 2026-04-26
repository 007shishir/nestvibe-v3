"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@heroui/react";
import Link from "next/link";

export default function BlogGrid({ initialPosts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {initialPosts.map((post, idx) => (
        <motion.div
          key={post._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-3xl">
            <CardHeader className="p-0 overflow-hidden">
              <Image
                removeWrapper
                alt={post.title}
                className="z-0 w-full h-[240px] object-cover hover:scale-110 transition-transform duration-500"
                src={post.image || "/blog-placeholder.jpg"}
              />
            </CardHeader>
            <CardBody className="py-6 px-6">
              <div className="flex gap-2 mb-3">
                <span className="text-[#005162] text-xs font-bold uppercase tracking-widest bg-[#00f0c0]/20 px-3 py-1 rounded-full">
                  {post.category || "Real Estate"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </CardBody>
            <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <span className="text-xs font-semibold text-slate-700">{post.author || "NestVibe Team"}</span>
              </div>
              <Button 
                as={Link}
                href={`/blog/${post.slug}`}
                variant="light" 
                className="text-[#005162] font-bold"
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}