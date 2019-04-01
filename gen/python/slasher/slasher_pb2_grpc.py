# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from slasher import slasher_pb2 as slasher_dot_slasher__pb2


class SlasherStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.Slash = channel.unary_unary(
        '/slasher.Slasher/Slash',
        request_serializer=slasher_dot_slasher__pb2.SlashRequest.SerializeToString,
        response_deserializer=slasher_dot_slasher__pb2.SlashResponse.FromString,
        )


class SlasherServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def Slash(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_SlasherServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'Slash': grpc.unary_unary_rpc_method_handler(
          servicer.Slash,
          request_deserializer=slasher_dot_slasher__pb2.SlashRequest.FromString,
          response_serializer=slasher_dot_slasher__pb2.SlashResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'slasher.Slasher', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
