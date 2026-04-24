'use client';

import React, { useState, useEffect } from 'react';
import { 
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, 
  Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  useDisclosure, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Chip,
  Image
} from "@heroui/react";
import { Plus, MoreVertical, Edit, Trash2, Search, RefreshCw } from "lucide-react";

export default function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  
  // Form State
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "", price: "", location: "", beds: "", baths: "", size: "", image: "", type: "Buy", category: "Residential"
  });

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/properties?limit=100');
      const data = await res.json();
      if (data.success) setProperties(data.properties);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const openCreateModal = () => {
    setEditingId(null);
    setFormData({ title: "", price: "", location: "", beds: "", baths: "", size: "", image: "", type: "Buy", category: "Residential" });
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
      image: property.image || "",
      type: property.type || "Buy",
      category: property.category || "Residential"
    });
    onOpen();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this property?")) {
      try {
        const res = await fetch(`/api/properties/${id}`, { method: 'DELETE' });
        if (res.ok) fetchProperties();
      } catch (error) {
        console.error("Failed to delete property:", error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const method = editingId ? 'PUT' : 'POST';
      const endpoint = editingId ? `/api/properties/${editingId}` : '/api/properties';
      
      const payload = { ...formData };
      if (payload.beds) payload.beds = parseInt(payload.beds);
      if (payload.baths) payload.baths = parseInt(payload.baths);

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        onClose();
        fetchProperties();
      } else {
        alert("Operation failed");
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Properties Management</h1>
          <p className="text-slate-500 text-sm mt-1">Manage all real estate listings across the platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="flat" isIconOnly onClick={fetchProperties}>
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
          <Button color="primary" className="bg-[#005162] font-semibold" startContent={<Plus className="w-4 h-4" />} onClick={openCreateModal}>
            Add Property
          </Button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <Table aria-label="Properties table" removeWrapper>
          <TableHeader>
            <TableColumn>PROPERTY</TableColumn>
            <TableColumn>TYPE</TableColumn>
            <TableColumn>PRICE</TableColumn>
            <TableColumn>BEDS / BATHS</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No properties found."} items={properties} isLoading={loading}>
            {(item) => (
              <TableRow key={item._id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-4 py-2">
                    <div className="w-16 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <Image src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-200"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 max-w-xs truncate">{item.title}</p>
                      <p className="text-xs text-slate-500 truncate">{item.location}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Chip size="sm" variant="flat" color={item.type === 'Buy' ? "primary" : "secondary"}>{item.type}</Chip>
                    <Chip size="sm" variant="flat" color="default">{item.category}</Chip>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-slate-700">{item.price}</span>
                </TableCell>
                <TableCell>
                  <span className="text-slate-600 text-sm">{item.beds} Beds • {item.baths} Baths</span>
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
                        <DropdownItem key="edit" startContent={<Edit className="w-4 h-4" />} onClick={() => openEditModal(item)}>
                          Edit Listing
                        </DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger" startContent={<Trash2 className="w-4 h-4" />} onClick={() => handleDelete(item._id)}>
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

      {/* Create / Edit Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-slate-100">
                {editingId ? "Edit Property" : "Add New Property"}
              </ModalHeader>
              <ModalBody className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <Input 
                      label="Property Title" 
                      placeholder="e.g. Modern Apartment in Banani" 
                      variant="bordered"
                      value={formData.title}
                      onValueChange={(val) => setFormData({...formData, title: val})}
                    />
                  </div>
                  <Input 
                    label="Price String" 
                    placeholder="e.g. BDT 45,000 / month" 
                    variant="bordered"
                    value={formData.price}
                    onValueChange={(val) => setFormData({...formData, price: val})}
                  />
                  <Input 
                    label="Location" 
                    placeholder="e.g. Block C, Banani, Dhaka" 
                    variant="bordered"
                    value={formData.location}
                    onValueChange={(val) => setFormData({...formData, location: val})}
                  />
                  <div className="flex gap-4 col-span-2 md:col-span-1">
                    <Input 
                      type="number"
                      label="Bedrooms" 
                      placeholder="0" 
                      variant="bordered"
                      value={formData.beds}
                      onValueChange={(val) => setFormData({...formData, beds: val})}
                    />
                    <Input 
                      type="number"
                      label="Bathrooms" 
                      placeholder="0" 
                      variant="bordered"
                      value={formData.baths}
                      onValueChange={(val) => setFormData({...formData, baths: val})}
                    />
                  </div>
                  <Input 
                    label="Size" 
                    placeholder="e.g. 1500 sqft" 
                    variant="bordered"
                    value={formData.size}
                    onValueChange={(val) => setFormData({...formData, size: val})}
                  />
                  <div className="col-span-2 flex gap-4">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" className="flex-1 justify-between">
                          Transaction: {formData.type}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu onAction={(key) => setFormData({...formData, type: key})}>
                        <DropdownItem key="Buy">Buy</DropdownItem>
                        <DropdownItem key="Rent">Rent</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="bordered" className="flex-1 justify-between">
                          Category: {formData.category}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu onAction={(key) => setFormData({...formData, category: key})}>
                        <DropdownItem key="Residential">Residential</DropdownItem>
                        <DropdownItem key="Commercial">Commercial</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="col-span-2">
                    <Input 
                      label="Image URL" 
                      placeholder="https://images.unsplash.com/..." 
                      variant="bordered"
                      value={formData.image}
                      onValueChange={(val) => setFormData({...formData, image: val})}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="border-t border-slate-100">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" className="bg-[#005162]" onPress={handleSubmit}>
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
