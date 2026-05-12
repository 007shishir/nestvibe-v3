"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip,
  Image,
  Card,
  CardBody,
  Tabs,
  Tab,
  Spinner,
  Textarea,
  Checkbox,
} from "@heroui/react";
import {
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  RefreshCw,
  LogOut,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("properties");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // Form State
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    beds: "",
    baths: "",
    size: "",
    images: [],
    image: "",
    type: "Buy",
    category: "Residential",
    featured: false,
    trending: false,
    verified: false,
    broker: "NestVibe Realty",
    description: "",
  });

  // Check admin auth on mount
  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (!data.authenticated || data.user.role !== "admin") {
        router.push("/dashboard");
      }
    } catch {
      router.push("/auth");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [propertiesRes, leadsRes] = await Promise.all([
        fetch("/api/properties?limit=100"),
        fetch("/api/leads"),
      ]);

      const propertiesData = await propertiesRes.json();
      const leadsData = await leadsRes.json();

      if (propertiesData.success) setProperties(propertiesData.properties);
      if (leadsData.success) setLeads(leadsData.leads);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const openCreateModal = () => {
    setEditingId(null);
    setFormData({
      title: "",
      price: "",
      location: "",
      beds: "",
      baths: "",
      size: "",
      images: [],
      image: "",
      type: "Buy",
      category: "Residential",
      featured: false,
      trending: false,
      verified: false,
      broker: "NestVibe Realty",
      description: "",
    });
    onOpen();
  };

  const openEditModal = (property) => {
    setEditingId(property._id);
    setFormData({
      title: property.title || "",
      price: property.price || "",
      location: property.location || "",
      beds: property.beds || "",
      baths: property.baths || "",
      size: property.size || "",
      images: property.images || [],
      image: property.image || "",
      type: property.type || "Buy",
      category: property.category || "Residential",
      featured: property.featured || false,
      trending: property.trending || false,
      verified: property.verified || false,
      broker: property.broker || "NestVibe Realty",
      description: property.description || "",
    });
    onOpen();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this property?")) {
      try {
        const res = await fetch(`/api/properties/${id}`, { method: "DELETE" });
        if (res.ok) fetchData();
      } catch (error) {
        console.error("Failed to delete property:", error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const method = editingId ? "PUT" : "POST";
      const endpoint = editingId
        ? `/api/properties/${editingId}`
        : "/api/properties";

      const payload = { ...formData };
      
      // Convert numbers
      if (payload.beds) payload.beds = parseInt(payload.beds);
      if (payload.baths) payload.baths = parseInt(payload.baths);

      // Clean up empty images
      if (payload.images) {
        payload.images = payload.images.filter(img => img.trim() !== "");
      }

      // Set primary image from first image in array or existing image
      if (payload.images && payload.images.length > 0) {
        payload.image = payload.images[0];
      } else if (!payload.image) {
        alert("Please add at least one image");
        return;
      }

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        onClose();
        fetchData();
      } else {
        const error = await res.json();
        alert(error.error || "Operation failed");
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save property");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Admin Dashboard
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Manage properties and view all form submissions.
            </p>
          </div>
          <Button
            isIconOnly
            variant="flat"
            color="danger"
            onClick={handleLogout}
            startContent={<LogOut className="w-4 h-4" />}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Tabs */}
        <Tabs
          aria-label="Admin options"
          selectedKey={activeTab}
          onSelectionChange={setActiveTab}
          color="primary"
          classNames={{
            tabList: "bg-white border border-slate-200 rounded-lg",
          }}
        >
          {/* Properties Tab */}
          <Tab key="properties" title={`Properties (${properties.length})`}>
            <Card className="border-0 shadow-sm">
              <CardBody className="space-y-6">
                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Properties Management
                  </h2>
                  <div className="flex gap-3">
                    <Button variant="flat" isIconOnly onClick={fetchData}>
                      <RefreshCw
                        className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
                      />
                    </Button>
                    <Button
                      color="primary"
                      className="bg-[#005162] text-white font-semibold"
                      startContent={<Plus className="w-4 h-4" />}
                      onClick={openCreateModal}
                    >
                      Add Property
                    </Button>
                  </div>
                </div>

                {/* Properties Table */}
                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <Table aria-label="Properties table" removeWrapper>
                    <TableHeader>
                      <TableColumn>PROPERTY</TableColumn>
                      <TableColumn>TYPE</TableColumn>
                      <TableColumn>PRICE</TableColumn>
                      <TableColumn>BEDS / BATHS</TableColumn>
                      <TableColumn>SIZE</TableColumn>
                      <TableColumn>ACTIONS</TableColumn>
                    </TableHeader>
                    <TableBody
                      emptyContent={"No properties found."}
                      items={properties}
                    >
                      {(item) => (
                        <TableRow
                          key={item._id}
                          className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                        >
                          <TableCell>
                            <div className="flex items-center gap-4 py-2">
                              <div className="w-16 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                                {item.image ? (
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-slate-200"></div>
                                )}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900 max-w-xs truncate">
                                  {item.title}
                                </p>
                                <p className="text-xs text-slate-500 truncate">
                                  {item.location}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Chip
                                size="sm"
                                variant="flat"
                                color={
                                  item.type === "Buy" ? "primary" : "secondary"
                                }
                              >
                                {item.type}
                              </Chip>
                              <Chip size="sm" variant="flat" color="default">
                                {item.category}
                              </Chip>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="font-medium text-slate-700">
                              {item.price}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-slate-600 text-sm">
                              {item.beds || 0} Beds • {item.baths || 0} Baths
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-slate-600 text-sm">
                              {item.size || "N/A"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="relative flex justify-end items-center gap-2">
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button isIconOnly size="sm" variant="light">
                                    <MoreVertical className="w-4 h-4 text-slate-500" />
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Actions">
                                  <DropdownItem
                                    key="edit"
                                    startContent={<Edit className="w-4 h-4" />}
                                    onClick={() => openEditModal(item)}
                                  >
                                    Edit Listing
                                  </DropdownItem>
                                  <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                    startContent={
                                      <Trash2 className="w-4 h-4" />
                                    }
                                    onClick={() => handleDelete(item._id)}
                                  >
                                    Delete Listing
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Tab>

          {/* Form Submissions Tab */}
          <Tab key="forms" title={`Form Submissions (${leads.length})`}>
            <Card className="border-0 shadow-sm">
              <CardBody className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-slate-900">
                    All Form Submissions
                  </h2>
                  <Button variant="flat" isIconOnly onClick={fetchData}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>

                {/* Forms Table */}
                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <Table aria-label="Forms table" removeWrapper>
                    <TableHeader>
                      <TableColumn>NAME</TableColumn>
                      <TableColumn>EMAIL</TableColumn>
                      <TableColumn>PHONE</TableColumn>
                      <TableColumn>MESSAGE</TableColumn>
                      <TableColumn>TYPE</TableColumn>
                      <TableColumn>DATE</TableColumn>
                    </TableHeader>
                    <TableBody
                      emptyContent={"No form submissions found."}
                      items={leads}
                    >
                      {(item) => (
                        <TableRow
                          key={item._id}
                          className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                        >
                          <TableCell>
                            <span className="font-medium text-slate-900">
                              {item.name || "N/A"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-slate-600 text-sm">
                              {item.email || "N/A"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-slate-600 text-sm">
                              {item.phone || "N/A"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-slate-600 text-sm max-w-xs truncate">
                              {item.message || "N/A"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Chip size="sm" variant="flat" color="primary">
                              {item.formType || "General"}
                            </Chip>
                          </TableCell>
                          <TableCell>
                            <span className="text-slate-600 text-sm">
                              {item.createdAt
                                ? new Date(item.createdAt).toLocaleDateString()
                                : "N/A"}
                            </span>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      {/* Create / Edit Property Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        scrollBehavior="inside"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-slate-200 pb-4">
                <h3 className="text-xl font-semibold">
                  {editingId ? "Edit Property" : "Add New Property"}
                </h3>
              </ModalHeader>

              <ModalBody className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Title - Full Width */}
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                      Property Title *
                    </label>
                    <Input
                      placeholder="e.g. Modern Apartment in Banani"
                      variant="bordered"
                      value={formData.title}
                      onValueChange={(val) =>
                        setFormData({ ...formData, title: val })
                      }
                      isRequired
                    />
                  </div>

                  {/* Price & Location */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Price *
                    </label>
                    <Input
                      placeholder="e.g. BDT 45,000 / month"
                      variant="bordered"
                      value={formData.price}
                      onValueChange={(val) =>
                        setFormData({ ...formData, price: val })
                      }
                      isRequired
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Location *
                    </label>
                    <Input
                      placeholder="e.g. Gulshan 2, Dhaka"
                      variant="bordered"
                      value={formData.location}
                      onValueChange={(val) =>
                        setFormData({ ...formData, location: val })
                      }
                      isRequired
                    />
                  </div>

                  {/* Bedrooms & Bathrooms */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-700">
                        Bedrooms *
                      </label>
                      <Input
                        type="number"
                        placeholder="5"
                        variant="bordered"
                        value={formData.beds}
                        onValueChange={(val) =>
                          setFormData({ ...formData, beds: val })
                        }
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-700">
                        Bathrooms *
                      </label>
                      <Input
                        type="number"
                        placeholder="6"
                        variant="bordered"
                        value={formData.baths}
                        onValueChange={(val) =>
                          setFormData({ ...formData, baths: val })
                        }
                      />
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Size *
                    </label>
                    <Input
                      placeholder="e.g. 4500 sqft"
                      variant="bordered"
                      value={formData.size}
                      onValueChange={(val) =>
                        setFormData({ ...formData, size: val })
                      }
                    />
                  </div>

                  {/* Transaction & Category */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Transaction Type *
                      </label>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            variant="bordered"
                            className="w-full justify-between"
                          >
                            {formData.type || "Select Type"}
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          onAction={(key) =>
                            setFormData({ ...formData, type: key })
                          }
                        >
                          <DropdownItem key="Buy">Buy</DropdownItem>
                          <DropdownItem key="Rent">Rent</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Category *
                      </label>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            variant="bordered"
                            className="w-full justify-between"
                          >
                            {formData.category || "Select Category"}
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          onAction={(key) =>
                            setFormData({ ...formData, category: key })
                          }
                        >
                          <DropdownItem key="Residential">
                            Residential
                          </DropdownItem>
                          <DropdownItem key="Commercial">
                            Commercial
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>

                  {/* Multiple Images */}
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Property Images
                    </label>
                    <div className="space-y-3">
                      {/* Image inputs */}
                      {formData.images && formData.images.length > 0 ? (
                        formData.images.map((img, idx) => (
                          <div key={idx} className="flex gap-2">
                            <Input
                              placeholder="https://images.unsplash.com/..."
                              variant="bordered"
                              value={img}
                              onValueChange={(val) => {
                                const newImages = [...formData.images];
                                newImages[idx] = val;
                                setFormData({ ...formData, images: newImages });
                              }}
                              className="flex-1"
                            />
                            <Button
                              isIconOnly
                              color="danger"
                              variant="light"
                              onClick={() => {
                                const newImages = formData.images.filter(
                                  (_, i) => i !== idx
                                );
                                setFormData({ ...formData, images: newImages });
                              }}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-slate-500">
                          No images added yet
                        </p>
                      )}

                      {/* Add image button */}
                      <Button
                        size="sm"
                        variant="flat"
                        color="primary"
                        className="bg-[#005162] text-white w-full"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            images: [...(formData.images || []), ""],
                          });
                        }}
                      >
                        + Add Image
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <Textarea
                      placeholder="e.g. Magnificent duplex with private elevator and city views."
                      variant="bordered"
                      value={formData.description}
                      onValueChange={(val) =>
                        setFormData({ ...formData, description: val })
                      }
                      rows={4}
                    />
                  </div>

                  {/* Broker */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Broker Name
                    </label>
                    <Input
                      placeholder="e.g. NestVibe Realty"
                      variant="bordered"
                      value={formData.broker}
                      onValueChange={(val) =>
                        setFormData({ ...formData, broker: val })
                      }
                    />
                  </div>

                  {/* Spacer */}
                  <div></div>

                  {/* Status Checkboxes */}
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-700 block mb-3">
                      Property Status
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <Checkbox
                        isSelected={formData.featured}
                        onValueChange={(val) =>
                          setFormData({ ...formData, featured: val })
                        }
                      >
                        Featured
                      </Checkbox>
                      <Checkbox
                        isSelected={formData.trending}
                        onValueChange={(val) =>
                          setFormData({ ...formData, trending: val })
                        }
                      >
                        Trending
                      </Checkbox>
                      <Checkbox
                        isSelected={formData.verified}
                        onValueChange={(val) =>
                          setFormData({ ...formData, verified: val })
                        }
                      >
                        Verified
                      </Checkbox>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter className="border-t border-slate-200 pt-4">
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  size="md"
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  className="bg-[#005162] text-white hover:bg-[#003d4a]"
                  onPress={handleSubmit}
                  size="md"
                >
                  {editingId ? "Save Changes" : "Create Property"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
